import { product } from "./data";

export function Product() {
  return (
    <section className="home-product" id="products" aria-labelledby="home-product-title">
      <div className="home-product-card">
        <div className="home-product-copy">
          <p className="home-section-badge">{product.badge}</p>
          <h2 id="home-product-title" className="home-product-name">
            {product.name} <span className="home-product-byline">{product.byline}</span>
          </h2>
          <p className="home-product-promise">{product.promise}</p>
          <p className="home-product-description">{product.description}</p>
          <ul className="home-product-capabilities">
            {product.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
        <div className="home-product-visual" aria-hidden="true">
          <div className="home-product-glow" />
          <span className="home-product-mark">V</span>
        </div>
      </div>
    </section>
  );
}
