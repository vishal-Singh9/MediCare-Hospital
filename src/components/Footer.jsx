import React from 'react'

function Footer() {
  return (
    <div className='footer' style={{marginTop:"200px"}}>
      <div className="footer footer-expand-lg m-2 p-2 position-relative bottom-0 start-0 w-100">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <h3 className=" content1" >© 2024 MediCare+</h3>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>

    <ul className="nav col-md-4 justify-content-end" >
      <li className="nav-item"><a  href="#" className="nav-link px-2 text-body-secondary" style={{color:"red"}}>Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Services</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">News</a></li>
    </ul>


   
   
  </footer>
</div>
    </div>
  )
}

export default Footer
