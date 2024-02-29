export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src="https://image.cnbcfm.com/api/v1/image/107219133-1680513064696-gettyimages-1413577536-dsc081482342342342.jpeg?v=1709093031&w=929&h=523&ffmt=webp&vtcrop=y" />
      </div>
      <div className="texts">
        <h2>Water scarcity threatens chipmakers</h2>
        <p className="info">
          <a className="author"> Feven Belay</a>
          <time>2024-02-20</time>
        </p>
        <p className="summary">
          Water shortages could impact semiconductor firms like TSMC, the
          world’s largest contract chip maker, S&P Global Ratings said in a
          Monday report.
        </p>
      </div>
    </div>
  );
}
