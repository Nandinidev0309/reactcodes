let data = new Promise((resolve, reject) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((dt) => {
      console.log(dt);
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt);
          fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((dt) => {
              console.log(dt);
              fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((dt) => {
                  console.log(dt);
                  fetch("https://fakestoreapi.com/products")
                    .then((res) => res.json())
                    .then((dt) => {
                      console.log(dt);
                    });
                });
            });
        });
    });
});
