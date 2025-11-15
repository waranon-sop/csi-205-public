import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Carts = ({ carts, setCarts }) => {
  const placeholderImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect width='300' height='200' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='26px' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E";

  const totalPrice = carts
    .reduce((prev, cart) => prev + cart.price, 0)
    .toFixed(2);

  return (
    <Container className="py-4">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {carts.map((cart) => (
          <Col key={cart.id}>
            <Card
              className="h-100 shadow-sm border-0 rounded-4"
              style={{
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 0.7rem 1rem rgba(0,0,0,.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 .125rem .25rem rgba(0,0,0,.075)";
              }}
            >
              <Card.Img
                variant="top"
                src={cart.thumbnailUrl || placeholderImage}
                style={{
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
                onError={(e) => (e.target.src = placeholderImage)}
              />

              <Card.Body className="d-flex flex-column text-center">
                <Card.Title
                  className="fw-semibold mb-1"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontSize: "1rem",
                    minHeight: "2.5em",
                  }}
                >
                  {cart.title}
                </Card.Title>

                <span className="fw-bold text-success fs-4 my-3">
                  ${Number(cart.price).toFixed(2)}
                </span>

                <div className="mt-auto">
                  <Button
                    variant="outline-danger"
                    className="w-100 rounded-pill"
                    onClick={() =>
                      setCarts((prev) => prev.filter((c) => c.id !== cart.id))
                    }
                  >
                    Remove
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {carts.length > 0 && (
        <div className="mt-5 p-4 border-0 rounded-4 shadow-sm bg-white d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mb-3 mb-md-0 text-center text-md-start">
            <h5 className="mb-1 text-muted">
              Items in cart: <b className="text-dark">{carts.length}</b>
            </h5>
            <h4 className="mb-0">
              Total: <span className="text-success fw-bold">${totalPrice}</span>
            </h4>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="rounded-pill px-5 fw-bold"
            onClick={() => {
              alert(`ชำระเงินสำเร็จ รวมทั้งหมด $${totalPrice}`);
              setCarts([]);
            }}
          >
            Checkout Now
          </Button>
        </div>
      )}

      {carts.length === 0 && (
        <div className="text-center py-5 text-muted">
          <h4>Your cart is empty.</h4>
          <p>Go add some awesome products!</p>
        </div>
      )}
    </Container>
  );
};

export default Carts;
