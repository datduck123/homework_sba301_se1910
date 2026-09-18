function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>SBA301 &bull; {year} &bull; Build → Run → Verify → Explain</p>
    </footer>
  );
}

export default Footer;
