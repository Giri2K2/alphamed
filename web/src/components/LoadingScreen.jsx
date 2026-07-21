export default function LoadingScreen() {
  return (
    <div className="loader-container">
      <img
        src="/images/logo.png"
        className="loader-logo"
      />
      <p className="loader-text">Loading AlphaMed...</p>
    </div>
  );
}