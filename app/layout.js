import "./globals.css";

export default function RootLayout(props) {
  console.log(props.teste);
  return (
    <html lang="en">
      <body>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
