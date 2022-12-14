const Section04 = () => {
  return (
    <section className="About02 basicSection">
      <h2>
        <span className="mainColor">CEO's</span> GREETINGS
      </h2>
      <p>항상 새로운 우투드영투드우</p>
      <div className="inner">
        <div className="top">
          <figure>
            <img src="./img/insta01.jpg" alt="" />
          </figure>
        </div>
        <div className="left">
          <p className="tit">
            웹서비스의 <span className="mainColor">새로운 미래를</span>
            <br />
            <span className="mainColor">우투드영투드우</span>가 만들어
            가겠습니다.
          </p>
        </div>
        <div className="right">
          <div className="des">
            <p className="tit">
              웹서비스의 <span className="mainColor">새로운 미래를</span>
              <br />
              <span className="mainColor">우투드영투드우</span>가 만들어
              가겠습니다.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Veritatis laborum nesciunt velit qui, consequuntur quaerat
              eligendi non amet quas quibusdam?
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <br />
              Repellat incidunt illo, asperiores fugiat quo quam fuga magnam
              beatae
              <br />
              culpa perspiciatis consequuntur natus obcaecati iure repudiandae.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              Tenetur, modi sequi quaerat architecto voluptate quasi.
            </p>

            <p>우투드영투드우 임직원 일동</p>
          </div>
        </div>
      </div>

      <div className="container bot pd15">
        <h3>주요현황</h3>
        <div className="table_response">
          <table className="table">
            <caption>* description</caption>
            <colgroup>
              <col style={{ width: "20%" }} />
              <col style={{ width: "30%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "30%" }} />
            </colgroup>
            <tbody>
              <tr>
                <th>주 소</th>
                <td>부산시 동래구 사직동 1234-56 쌍둥이 돼지국밥 옆</td>
                <th>전화번호</th>
                <td>051-783-2317</td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td>051-783-2317</td>
                <th>전화번호</th>
                <td>051-783-2317</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Section04;
