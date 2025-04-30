const footerText = '© 2025 My Site. All rights reserved.';

export default function Footer(props){
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <ul>
          {props.links.map((item, index) => {
            return <a key={index} href="#">{item}</a>
          })}
        </ul>
        <p>{footerText}</p>
      </div>
    </footer>
  )
}