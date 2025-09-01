export default function HomePage() {
  return (
    <main className="home">
      <div className="content">
        <img src="/sienna.jpg" alt="Sienna theme" className="image" />
        <h1 className="title">Sienna is queen!!</h1>
      </div>

      <style jsx>{`
        .home {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #fef9c3, #bbf7d0);
          font-family: "Comic Sans MS", "Chalkboard SE", cursive;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.7);
          padding: 2rem 3rem;
          border-radius: 1.5rem;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
          animation: pop 1.2s ease;
        }

        .image {
          width: 260px;
          border-radius: 1rem;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          margin-bottom: 1.5rem;
        }

        .title {
          font-size: 2.3rem;
          font-weight: bold;
          color: #f472b6; /* 粉色文字 */
          text-shadow: 2px 2px 0 #fef08a, -2px -2px 0 #86efac;
          animation: bounce 1.5s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes pop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
