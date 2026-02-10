function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-name">
         Made by ~ Molik Bhateja
        </span>

        <a
          href="https://github.com/molik2913x"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-github"
          aria-label="GitHub"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.73 1.26 3.4.97.1-.75.4-1.26.73-1.55-2.55-.3-5.23-1.28-5.23-5.68 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.16 0 0 .98-.31 3.2 1.18a11.2 11.2 0 0 1 5.83 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.64.24 2.86.12 3.16.75.81 1.2 1.85 1.2 3.11 0 4.41-2.68 5.38-5.24 5.67.41.35.77 1.05.77 2.12v3.14c0 .31.21.66.8.55A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
