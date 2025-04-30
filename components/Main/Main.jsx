const mainParagraphs = [
    'This is the first paragraph of the main content.',
    'Here is another bit of content to display on the page.',
    'You can keep adding more text as needed!'
  ]
  
  export default function Main(){
    return (
      <main className="section">
        <div className="container has-text-centered">
          {mainParagraphs.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>
          })}
        </div>
      </main>
    )
  }