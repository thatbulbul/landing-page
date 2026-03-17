export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-sm text-foreground/50 text-center">
          © {currentYear} GHL Automation Services. All rights reserved. | Made for USA agencies and local businesses.
        </p>
      </div>
    </footer>
  );
}
