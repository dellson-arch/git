// src/app/layout.js
import StoreProvider from "@/store/provider";
import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}