const container = document.querySelector(".challenges");

fetch("challenges.json")
  .then((response) => response.json())
  .then((challenges) =>
    challenges.forEach((challenge) => {
      //criando container
      const challengeContent = document.createElement("div");
      challengeContent.setAttribute("class", "challenge");

      //criando âncora
      const challengeAncora = document.createElement("a");
      challengeAncora.setAttribute("href", challenge.url);

      //criando imagem
      const challengeImage = document.createElement("img");
      challengeImage.setAttribute("class", "challenge__image");
      challengeImage.setAttribute("src", challenge.image);

      //criando título
      const challengeTitle = document.createElement("p");
      challengeTitle.setAttribute("class", "challenge__title");
      challengeTitle.textContent = challenge.name;
      //TODO: Implementar lógica dificuldade
      //criando dificuldade

      //TODO: Implementar lógica tecnologia
      //criando tecnologias

      challengeAncora.appendChild(challengeImage);
      challengeAncora.appendChild(challengeTitle);
      challengeContent.appendChild(challengeAncora);
      container.appendChild(challengeContent);
    })
  );
