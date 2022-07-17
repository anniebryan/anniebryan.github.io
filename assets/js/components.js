class Header extends HTMLElement {
  connectedCallback() {
    console.log("test");
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mdg-nav">
        <div class="container">
          <a class="navbar-brand" href="/swe-interview-prep-course/" style="margin-top: 2px; margin-bottom: 3px">
            SWE Interview Prep Course
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style="margin-top: 2px">
            <div class="navbar-nav">
              <div class="dropdown">
                <button class="dropbtn">
                  <a class="nav-item nav-link" href="/swe-interview-prep-course/content/">
                    Content
                    <i class="fa fa-caret-down"></i>
                  </a>
                </button>
                <div class="dropdown-content">
                  <a href="/swe-interview-prep-course/content/complexity.html">Complexity</a>
                  <a href="/swe-interview-prep-course/content/sorting.html">Sorting</a>
                  <a href="/swe-interview-prep-course/content/data-structures.html">Data Structures</a>
                  <a href="/swe-interview-prep-course/content/graph-algorithms.html">Graph Algorithms</a>
                  <a href="/swe-interview-prep-course/content/dynamic-programming.html">Dynamic Programming</a>
                </div>
              </div>
              <a class="nav-item nav-link" href="/swe-interview-prep-course/practice-problems/">Practice Problems</a>
              <a class="nav-item nav-link" href="/swe-interview-prep-course/tutoring.html">Tutoring</a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

class Tutoring extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="card bg-light mb-3" style="max-width: 100%; margin-top: 50px;">
        <div class="row pad-children">
          <div class="col-md-4">
            <img src="/images/me.jpg" width="250px" class="img-fluid center-vertically">
          </div>
          <div class="col-md-8">
            <h5 class="card-title no-anchor" data-toc-skip>Take your interview skills to the next level.</h5>
            <p class="card-text">
              I offer individual virtual tutoring! Sessions are always customized to what you'd find most helpful, which could include:
              <ul>
                <li>Help with specific topics/concepts you're struggling with</li>
                <li>General advice on how to approach problems</li>
                <li>Practice problem examples and walkthroughs</li>
              </ul>
            </p>
            <a class="btn btn-primary" style="margin-top: 5px; margin-right: 15px" href="/swe-interview-prep-course/tutoring.html">I'm interested!</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('header-component', Header);
customElements.define('tutoring-component', Tutoring);