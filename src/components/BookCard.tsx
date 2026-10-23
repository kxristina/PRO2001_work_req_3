import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import type { Book } from "../data/books";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Card className="book-card h-100">
      <Card.Img
        variant="top"
        src={book.image}
        alt={`Cover of ${book.title}`}
        className="book-cover"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{book.title}</Card.Title>

        <Card.Text className="book-description">
          {book.description}
        </Card.Text>

        <Link
        to={`/books/${book.id}`}
        className="btn btn-primary mt-auto"
        >
        View summary
        </Link>
      </Card.Body>
    </Card>
  );
}