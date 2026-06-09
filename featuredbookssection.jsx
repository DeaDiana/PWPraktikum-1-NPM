const ListBooks = [
    {
        id: 1,
        title: "Sailor Moon: The Classic Manga Collection",
        img: "sailormoon.jpg",
        author: "Naoko Takeuchi",
        sinopsis: "A timeless tale of love, friendship, and magical adventures. Follow Usagi Tsukino as she transforms into Sailor Moon to protect the Earth from evil forces. This collection includes the original manga series, filled with action, romance, and unforgettable characters.",
        rating: 4.5,
        views: 1200,
    },

    {
        id: 2,
        title: "Legally Blonde",
        img: "legally-blonde_y2q9.jpg",
        author: "Amanda Brown",
        sinopsis: "A fun and empowering story about a blonde law student who proves that appearances can be deceiving. Follow Elle Woods as she navigates the world of Harvard Law School and discovers her own strength and intelligence.",
        rating: 4.2,
        views: 950,
    },
    {
        id: 3,
        title: "Meangirls",
        img: "meangirls.jpeg",
        author: "Liz Tuccillo",
        sinopsis: "A hilarious and heartwarming story about friendship, loyalty, and finding your place in the world. Follow Cady Heron as she navigates the treacherous social landscape of a high school and learns the true meaning of acceptance.",
        rating: 4.0,
        views: 800,
    },
    {
        id: 4,
        title: "Uptown Girl",
        img: "uptown.jpg",
        author: "Heather Mac Donald",
        sinopsis: "A captivating story about love, ambition, and the complexities of modern relationships. Follow the journey of a young woman as she navigates the bustling streets of New York City and discovers what truly matters in life.",
        rating: 4.3,
        views: 1100,
    },
];

const BookCard = ({ book }) => {
  const { title, author, rating, img } = book;

  
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`bi bi-star${i < Math.floor(rating) ? "-fill" : ""} text-warning`}
      ></i>
    ));
  }

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body text-center">
        <div className="bg-light p-4 mb-3 rounded">
          {img ? (
            <img
              src={`/books/${img}`}
              alt={title}
              className="img-fluid"
              style={{ maxHeight: "150px", objectFit: "cover" }}
            />
          ) : (
            <i
              className="bi bi-book-half"
              style={{ fontSize: "4rem", color: "#6c757d" }}
            ></i>
          )}
        </div>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="text-muted small mb-2">by {author}</p>
        <div className="mb-2">
          {renderStars(rating)}
          <span className="ms-2 text-muted small">({rating})</span>
        </div>
      </div>
    </div>
  );
};

export function FeaturesSection() {
    return (
        <section id="books" className="py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col">
                        <h2 className="fw-bold text-center">Featured Books</h2>
                        <p className="text-center text-muted">Handpicked selections just for you.</p>
                    </div>
                </div>
                <div className="row g-4">
                    {ListBooks.map((book) => (
                        <div key={book.id} className="col-md-6 col-lg-3">
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
