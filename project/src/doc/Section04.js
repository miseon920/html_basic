const Section04 = () => {
  return (
    <section className="About02 basicSection">
      <h2>
        <span className="mainColor">CEO's</span> GREETINGS
      </h2>
      <p>항상 새로운 써니대표</p>
      <div className="inner">
        <div className="top">
          <figure>
            <img src="./img/he.jpg" alt="" />
            {/* 인덱스기준으로해서 경로가 ./ 임 */}
          </figure>
        </div>
        <div className="left">50%</div>
        <div className="right">50%</div>
      </div>
    </section>
  );
};

export default Section04;
