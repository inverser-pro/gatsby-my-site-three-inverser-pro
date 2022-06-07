import * as React from "react"
import {Link} from "gatsby"

import Container from "../compots/container";
import Seo from "../compots/Seo";

const NotFoundPage = () => (
  <Container>
    <Seo title="404: Страница не найдена" />
    <div className="fx ac fdc" style={{marginTop:'6rem'}}>
      <h1>404: Страница не найдена</h1>
      <p><Link to="/">Перейти на главную</Link></p>
    </div>
  </Container>
)

export default NotFoundPage
