<h1>React-router-dom 라이브러리를 이용하여 라우팅을 구현해보자!</h1>
<p>1. yarn add react-router-dom 을 통해 라이브러리를 설치한다.</p>
<p>2. index.js에 와서 import { BrowserRouter } from "react-router-dom"을 작성한다.</p>
<p>3. App 컴포넌트를 BrowserRouter로 감싼다.</p>

![image](https://user-images.githubusercontent.com/58474431/199402068-726760e6-c26d-44c0-84f8-3f82734cad71.png)

<p>4. App.js에서 import { Routes, Route } from "react-router-dom";을 작성한다.</p>
<p>5. Routes 컴포넌트로 감싼 후에 Route 컴포넌트를 생성하는데 props로 path와 element가 필요하다.</p>
<p>6. 예를 들어, Homepage와 Aboutpage가 있다고 가정한다.</p>

![image](https://user-images.githubusercontent.com/58474431/199402349-48aed5ab-835b-45d9-91ed-efd68f61db16.png)

<p>7. pass에는 이동할 주소와 element에는 보여줄 컴포넌트를 작성한다.</p>
<p>8. page 간에 이동하는 방법은 link 방법과 navigate 방법이 있다/</p>
<p>9. link 방법으로는 Link 컴포넌트를 import를 한 후에, props로 to에 이동할 페이지를 작성한다.</p>

![image](https://user-images.githubusercontent.com/58474431/199402527-2bd5b39c-2ca5-4540-b939-3717347ac492.png)

<p>10. navigate 방법으로는 useNavigate를 import한 후에, navigate() 함수를 실행하면 된다.</p>

![image](https://user-images.githubusercontent.com/58474431/199402827-78e6419f-2f7c-43fc-8403-ffe048e280c0.png)

![image](https://user-images.githubusercontent.com/58474431/199402711-bffc0bd0-d7ca-4b01-b639-68bcbb6f954c.png)

![image](https://user-images.githubusercontent.com/58474431/199402744-f0bf6ffc-d15c-4d71-9e95-26dfb051e4ad.png)
