export function ChooseUs() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row mb-5">
                    <div className="col">
                        <h2 className="fw-bold text-center">Why Choose Us?</h2>
                        <p className="text-center text-muted">
                            Discover the benefits of our book platform
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {ListChoose.map((item) => (
                        <div key={item.id} className="col-12 col-sm-6 col-md-4">
                            <Choose item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const ListChoose = [
    {
        id: 1,
        title: "Vast Collection",
        description: "Access thousands of books across all genres, from bestsellers to hidden gems.",
        icon: "bi bi-collection"
    },
    {
        id: 2,
        title: "Fast Delivery",
        description: "Get your books delivered quickly and securely to your doorstep.",
        icon: "bi bi-truck"
    },
    {
        id: 3,
        title: "Best Prices",
        description: "Get the best deals on your favorite books without breaking the bank.",
        icon: "bi bi-percent"
    },
]

const Choose = ({ item }) => {
    const { title, description, icon } = item;

    return (
        <div className="card h-100">
            <div className="card-body text-center">
                <div className="p-4 mb-3">
                    <i className={`${icon} fs-1 text-primary`}></i>
                </div>
                <h5 className="fw-bold">{title}</h5>
                <p className="text-muted">{description}</p>
            </div>
        </div>
    )
}