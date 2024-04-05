import './style.css';
import Sidebar from '@/components/Sidebar';

export default async function RootLayout({
  children
}){
  return (
      <html lang="en">
        <body>
          <div className="container">
            <div className="main">
              <Sidebar />
              {/*  page会作为 children 参数传入 layout*/}
              <div className="col note-viewer">{children}</div>
            </div>
          </div>
        </body>
      </html>
  )
}
