import "./Footer.css"

const Footer = ({count, pages}) => {
  return (
    <footer>
      <div>Characters: {count}</div>
      <div>Pages: {pages}</div>
      <div>Server status</div>
      <div className="footer-status"></div>
    </footer>
  );
}
 
export default Footer
