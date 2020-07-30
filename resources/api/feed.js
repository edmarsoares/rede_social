const lerFotos = async (callback) => {
    const fotosHttp = await fetch("http://192.168.1.4:3030/feed");
    const fotosJson = await fotosHttp.json();
    callback(fotosJson);

  }

export default lerFotos;