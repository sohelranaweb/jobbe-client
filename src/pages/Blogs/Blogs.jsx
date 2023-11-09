import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Jobbe | Blogs</title>
      </Helmet>
      <div className="mt-10">
        <h1 className="text-xl font-bold">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <div className=" p-8 my-4">
          <h1 className="font-bold">Answer:</h1>
          <p>
            Access tokens and refresh tokens are used in authentication systems,
            often within OAuth or similar protocols, to provide secure access to
            resources on behalf of a user or an application
          </p>

          <p>
            {" "}
            <span className="text-lg font-bold">Access Token: </span>
            An access token is a credential that is used by an application to
            access protected resources on behalf of a user. It is usually
            time-limited and grants specific permissions and access rights. When
            a user logs in or grants permission to an application, they receive
            an access token. This token is sent with every request to access
            protected resources, validating the user's authorization to use
            those resources.
          </p>

          <p>
            <span className="text-lg font-bold">Refresh Token: </span>A refresh
            token is a longer-lived credential that is used to obtain a new
            access token after the current access token expires. It's a way to
            maintain user sessions without requiring the user to repeatedly log
            in. When the access token expires, the application can use the
            refresh token to get a new access token without requiring the user
            to re-enter their credentials.
          </p>
          <h1 className="text-lg font-bold">
            Where to Store Them on the Client-Side:
          </h1>
          <p>
            <span className="text-lg font-bold">Access Token: </span>
            Access tokens are typically stored on the client-side in a way that
            balances security and usability. Common storage options include
            in-memory storage, browser storage mechanisms like Web Storage or
            Cookies, or in the mobile app's keychain or secure storage. It's
            important to ensure that access tokens are protected against
            cross-site scripting (XSS) attacks.
          </p>
          <p>
            <span className="text-lg font-bold">Refresh Token: </span>
            Refresh tokens are sensitive and should be stored more securely.
            They are usually stored on the server-side or in a secure, HTTP-only
            cookie for web applications. Storing them in the client-side should
            be done with caution, and security best practices should be
            followed.
          </p>
        </div>
        <h1 className="text-xl font-bold">
          2. What is express js? What is Nest JS?
        </h1>
        <div className=" p-8 my-4">
          <h1 className="font-bold">Answer:</h1>

          <p>
            {" "}
            <span className="text-lg font-bold">Express.js: </span>
            Express.js is a minimal and flexible web application framework for
            Node.js, a server-side runtime environment for JavaScript. It
            simplifies the process of building web applications and APIs by
            providing a set of features and tools for handling HTTP requests,
            routing, middleware, and more. Express is known for its simplicity
            and its wide adoption in the Node.js community.
            <br />
            Key features of Express.js include routing, middleware support,
            template engines for rendering HTML, and various modules and
            libraries that extend its functionality. It is often used to create
            RESTful APIs and web servers. Many developers choose to use
            additional libraries and packages in combination with Express to
            build more complex web applications
          </p>

          <p>
            <span className="text-lg font-bold">NestJs: </span>Nest.js is a
            server-side, back-end web framework for building scalable and
            maintainable web applications. It is built on top of Express.js, so
            it leverages Express's features and capabilities while adding its
            own set of design patterns and tools to streamline the development
            process. Nest.js is particularly popular for building
            enterprise-grade applications and microservices.
          </p>
        </div>
        <h1 className="text-xl font-bold">3. Eplain my code on this project</h1>
        <div className=" p-8 my-4">
          <h1 className="font-bold">Answer:</h1>

          <p>
            {" "}
            <span className="text-lg font-bold">React Router: </span>
            React Router is a routing library for React applications. It enables
            developers to manage navigation and define different routes in a
            single-page application (SPA). It allows for dynamic loading of
            components based on the URL, providing a seamless user experience
            without full-page reloads.
          </p>

          <p>
            <span className="text-lg font-bold">Firebase: </span>
            Firebase is a platform developed by Google for building web and
            mobile applications. It offers various services like authentication,
            real-time database, cloud storage, hosting, and more. Firebase
            provides a robust backend infrastructure that developers can use to
            create, manage, and scale their applications.
          </p>
          <p>
            <span className="text-lg font-bold">MongoDB: </span>
            MongoDB is a popular NoSQL database. It stores data in flexible,
            JSON-like documents, making it easier to handle unstructured data
            and enabling better scalability and performance for certain types of
            applications. It's known for its flexibility and scalability in
            managing large amounts of data.
          </p>
          <p>
            <span className="text-lg font-bold">Express.js: </span>
            Express.js is a web application framework for Node.js. It simplifies
            the process of building web applications and APIs by providing a set
            of features and tools for handling HTTP requests, routing,
            middleware, and more. Express is widely used due to its simplicity
            and extensive community support.
          </p>
          <p>
            <span className="text-lg font-bold">Daisy UI: </span>
            Daisy UI is a UI component library for tailwind CSS. It provides a
            set of pre-designed, customizable components that can be easily
            integrated into web applications. It helps in rapidly building user
            interfaces by offering a collection of styled components that follow
            Tailwind CSS's utility-first approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
