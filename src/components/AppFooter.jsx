import { FaFacebook, FaInstagram } from "react-icons/fa";

const AppFooter = () => {
  return (
    <footer className="p-4 mt-4 bg-light border-top text-center">
      <div>
        <p className="h5 mb-2 fw-bold text-dark">
          มหาวิทยาลัยศรีปทุม
        </p>
        <p className="text-muted small lh-lg">
          คณะเทคโนโลยีสารสนเทศ / วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
        </p>
      </div>

      <div className="mt-3 pt-3 border-top">
        <a
          href="https://www.facebook.com/waranon.pipe/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-muted text-decoration-none d-inline-flex align-items-center gap-2 link-primary"
        >
          <FaFacebook />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/_petrpipe/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-muted text-decoration-none d-inline-flex align-items-center gap-2 link-primary"
        >
          <FaInstagram />
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default AppFooter;
