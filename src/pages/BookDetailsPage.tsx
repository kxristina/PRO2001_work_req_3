import { Container, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetailsPage() {
  const { id } = useParams();

  const book = books.find(
    (item) => item.id === Number(id)
  );

  if (!book) {
    return (
      <Container className="py-5">
        <h1>Book not found</h1>

        <Link to="/" className="btn btn-secondary">
         Back to gallery
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card className="details-card mx-auto">
        <Card.Img
          src={book.image}
          alt={`Cover of ${book.title}`}
          className="details-cover"
          style={{ backgroundColor: book.backgroundColor }}
        />

        <Card.Body>
          <h1>{book.title}</h1>

          <p className="mt-4">{book.details}</p>

          <Link to="/" className="btn btn-secondary">
          Back to gallery
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}