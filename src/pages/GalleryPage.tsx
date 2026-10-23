import { Container, Row, Col } from "react-bootstrap";
import BookCard from "../components/BookCard";
import { books } from "../data/books";

export default function GalleryPage() {
  return (
    <Container className="py-5">
      <header className="gallery-intro text-center mb-5">
        <h1>Book Recommendations</h1>
      </header>

      <Row className="g-4">
        {books.map((book) => (
          <Col key={book.id} xs={12} sm={6} lg={4}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}