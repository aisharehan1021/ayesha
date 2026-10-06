const products = [
  { id: 1, name: 'Classic T-Shirt', price: 19, image: '/tshirt.svg' },
  { id: 2, name: 'Denim Jacket', price: 59, image: '/jacket.svg' },
  { id: 3, name: 'Hoodie', price: 45, image: '/hoodie.svg' },
  { id: 4, name: 'Summer Dress', price: 39, image: '/dress.svg' },
  { id: 5, name: 'Slim Jeans', price: 49, image: '/jeans.svg' },
  { id: 6, name: 'Sneakers', price: 69, image: '/sneakers.svg' },
];

export default function Home() {
  return (
    <main>
      <header>
        <h1>Threads</h1>
        <p>Simple, comfortable clothing for everyday wear.</p>
      </header>

      <section className="grid">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </section>
    </main>
  );
}
