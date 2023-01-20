import React, { Fragment } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
   <Fragment>
   <div className="nav">
        <div className="home">
          <Link to="/">
            <p>
              <span class="material-symbols-outlined">house</span>Home
            </p>
          </Link>
        </div>
        <div className="orders">
          <Link to="/orders">
            <p><span class="material-symbols-outlined">
            order_play
            </span>Orders</p>
          </Link>
        </div>
        <div className="delievery">
          <Link to="/Delievery">
            <p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAY1BMVEX///8AAABfX1/5+fkoKCjS0tJXV1cTExO9vb2Pj4+srKzm5uaZmZmJiYnr6+vy8vLe3t45OTlERERycnK3t7fJycnY2Nhra2ugoKA+Pj4bGxtkZGRRUVF4eHiCgoIMDAwyMjI16yUUAAAD40lEQVRoge2Z6ZKzKhCGcUvcRo1bnLgk93+Vn4AYQQJN4lTqnOL5lbj0S7N0N4iQxWKxWCwWi8XyfyZMq959l6rL35SdnE+J35HNHx/rOk74hnB/gK5Tesa6xRG6jtMaC3fHCJv39c8xwubTywpb4T8Tbr4ljIpAQ1jd/0QY0rbLl4RR5uuErxkFkiE9YHr4LRCKYY9iyk6XME5gWx5KAMP8pFM7DDfUoPzXRNgZVD2ew+3UAOHzbWbtF1V+NvNYN6+jnMytpF4GcFS4DC895jHWPfJcTg1dAYGir3sfxKUFzOrNOvYGfMFVuDw/A2F+LrsZCCN00bgMJtEXopwwqeNOOqtBqKG+amXFkDniS5r6rwZYNRaGuPw3+Zi4XHxBmLh8VQobhH8DYYjLTSRlMovOojBxuVIKv27RJ8IQl1+SfSJMXB6Ei7F70jIlRuO/L30qfJmfX8B9Wg6IlAphmnYf9SZBaguo1RZ8z35Jdyx3/KnJFmGgrbmAMZvZL/GHrjAT1pe1YFIErgAC5AEHBUQMqZIxEULtgbqOQxaZbtsStLhOhBfAEBpwABkP1SWjzJElMor6wJlFECJ3NpylHKw6U/LCqf6Ng/B54YMKAQDnbwk7VlhCOUVdNJXGpvsoTaPq1YrQCV9ilkLz2CQ9VeumpZAfvauFb3xKj6EL+sTVV5ks6imFh4RcTdq2XX4NIF0aD/OibQua9iU7FJWwi3ND3p3w1v4+kK8cHiRVkG5qRxJl/StJB/siVSFcYqX6mTX9Givrsyj219v0rpvIlBXCeJwi7uEfBPh6gDfhGVef3RvJ9HktPOf+XeyOdm3ZM4+qJ9aF2AehSH0tLB2ZcB50dZk7IUk5hVOCUJfzwpsie+5WjwUNd+w3FtSfxIpnex/VyCx0YoNvvPCmrgpWAz2eHNkynUPNNgpnHZf+JKEnpL/vYj+IW7hnYESs2hm87a1RUx4+7y+xp1n94BazWHMF25aX7JWNhRvXuj0xs3FhJumhSbexPdMjkXV81u+M7E7us78aYepZxN5b/27G8So5ZJwj1W0usqadMFqFK0demeHirGFKaxlJR3meq4l/x4/cH6OmtvVoNmJnr8mZb8dLaKets6fj2wFh4F6hgUPcXUtYupTtCml7axPhZcnTT5TLulAfe1NoT5VUeVlERt/R2Ul81QRN5fB+qFgCrd8FAdsIqE9Rd+zD8g/kNclnd8ODl1xcOBdYj4WirtHUwiR8QvChDRcOVt444sq2Bd5vAn6PC4+R/nkJz8ZDJvRKth4vl28fkjfp6I4pfCe9kNc/136KIcvAYrFYLBaLxWL5j/MPRuE8+DcEoCQAAAAASUVORK5CYII="></img>
            Delievery
            </p>
          </Link>
        </div>
        <div className="products">
          <Link to="/Products">
            <p>Products</p>
          </Link>
        </div>
        <div className="products">
          <Link to="/Analytics">
            <p><span class="material-symbols-outlined">
            monitoring
            </span>Analytics</p>
          </Link>
        </div>
        <div className="Payouts">
          <Link to="/Payouts">
            <p>Payouts</p>
          </Link>
        </div>
        <div className="Discounts">
          <Link to="/Discounts">
            <p>Discounts</p>
          </Link>
        </div>
      </div>

   </Fragment>
  )
}
