"use client";

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

/* ─── Thank-you screen ─────────────────────────────────────── */
function ThankYou({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-4xl">
        🎉
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">You&apos;re in!</h3>
        <p className="mt-2 text-sm text-white/60">
          Thank you for enrolling in Klaudium Studio Course. Check your email for next steps.
        </p>
      </div>
      <button
        className="rounded-full bg-klaudium-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-bright-red"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}

/* ─── Checkout form (rendered inside <Elements>) ───────────── */
function CheckoutForm({ onSuccess }: { onSuccess: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      redirect: "if_required"
    });

    if (stripeError) {
      setError(stripeError.message ?? "Payment failed. Please try again.");
      setLoading(false);
    } else {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Stripe handles card UI via PaymentElement */}
      <PaymentElement
        options={{
          layout: "tabs",
          fields: { billingDetails: { name: "never", email: "never" } }
        }}
      />

      {error && (
        <p className="rounded-lg bg-red-950/50 px-4 py-2.5 text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full rounded-xl bg-klaudium-red py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bright-red disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Processing…" : "Pay $100"}
      </button>
    </form>
  );
}

/* ─── Modal wrapper ─────────────────────────────────────────── */
interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "details" | "payment" | "success";

export function EnrollModal({ isOpen, onClose }: EnrollModalProps) {
  const [step, setStep] = useState<Step>("details");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [fetching, setFetching] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Reset when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep("details");
      setName("");
      setEmail("");
      setClientSecret(null);
      setFetchError(null);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleDetailsSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripePromise) {
      setFetchError("Enrollment payments are not configured yet.");
      return;
    }

    setFetching(true);
    setFetchError(null);
    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Server error");
      setClientSecret(data.clientSecret);
      setStep("payment");
    } catch (err) {
      setFetchError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setFetching(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="relative w-full max-w-md rounded-2xl border border-red-500/20 bg-[#0c0c0c] p-8 shadow-[0_0_60px_rgba(225,6,0,0.15)]">
        {/* Close button */}
        <button
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-white/40 transition-colors hover:text-white"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        {step !== "success" && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">Enroll in Klaudium Studio Course</h2>
            <p className="mt-1 text-sm text-white/50">
              {step === "details" ? "Enter your details to continue." : "Complete your payment to get instant access."}
            </p>
            <div className="mt-3 text-2xl font-bold text-klaudium-red">$100</div>
          </div>
        )}

        {/* Step 1 — Details */}
        {step === "details" && (
          <form onSubmit={handleDetailsSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/60" htmlFor="enroll-name">
                Full name
              </label>
              <input
                id="enroll-name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Smith"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/60" htmlFor="enroll-email">
                Email address
              </label>
              <input
                id="enroll-email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30"
              />
            </div>

            {fetchError && (
              <p className="rounded-lg bg-red-950/50 px-4 py-2.5 text-sm text-red-400">{fetchError}</p>
            )}

            <button
              type="submit"
              disabled={fetching}
              className="w-full rounded-xl bg-klaudium-red py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bright-red disabled:cursor-not-allowed disabled:opacity-50"
            >
              {fetching ? "Loading…" : "Continue to Payment →"}
            </button>
          </form>
        )}

        {/* Step 2 — Payment */}
        {step === "payment" && clientSecret && (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                theme: "night",
                variables: {
                  colorPrimary: "#e10600",
                  colorBackground: "#0c0c0c",
                  colorText: "#ffffff",
                  borderRadius: "12px"
                }
              }
            }}
          >
            <CheckoutForm onSuccess={() => setStep("success")} />
          </Elements>
        )}

        {/* Step 3 — Success */}
        {step === "success" && <ThankYou onClose={onClose} />}
      </div>
    </div>
  );
}
