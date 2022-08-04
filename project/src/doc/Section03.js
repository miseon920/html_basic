const Section03 = () => {
  return (
    <section className="Business02 basicSection">
      <h2>
        <span className="mainColor">OUR</span> Business
      </h2>
      <p>오늘도 뛰고 있는 써니대표</p>
      <div className="container">
        <div className="left">
          <figure>
            <img src="./img/insta01.jpg" alt="" />
          </figure>
        </div>
        <div className="right list">
          <h3>심플하지만 다갖춘 써니대표</h3>
          <p>써니대표에 대해서 궁금하신걸 물어보세요</p>
          <ul className="dotList">
            <li>odio praesentium? At!</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>adipisicing elit. Ipsam debitis cumque nostrum</li>
            <li>quod obcaecati voluptate ut soluta</li>
          </ul>
          <div className="bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            <br />
            similique nulla nam iste aut explicabo totam ullam perferendis
            necessitatibus ad!
          </div>
        </div>
      </div>
      <div className="container bot">
        <h3>심플하지만 다갖춘 써니대표</h3>
        <ul className="after">
          <li data-num="01">odio praesentium? At!</li>
          <li data-num="02">Lorem ipsum dolor sit amet consectetur</li>
          <li data-num="03">adipisicing elit. Ipsam debitis cumque nostrum</li>
          <li data-num="04">quod obcaecati voluptate ut soluta</li>
        </ul>
      </div>
    </section>
  );
};
export default Section03;
