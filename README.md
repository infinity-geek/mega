[![node badge](https://img.shields.io/badge/node-15.2-brightgreen?style=for-the-badge)](https://nodejs.org/)
[![node badge](https://img.shields.io/badge/docker-laontme/erbuc-blue?style=for-the-badge)](https://hub.docker.com/r/laontme/erbuc)
[![node badge](https://img.shields.io/badge/made_with-❤-ff3053?style=for-the-badge)](https://laont.me/)

# erbuc
> Convert [mega.nz](https://mega.nz) public links to direct links

## How to use
1. Go to [mega.nz](https://mega.nz)
1. Copy full link of **public** file. Template below
1. Go to [erbuc.herokuapp.com](https://erbuc.herokuapp.com/)
1. Paste link, generate direct and use this

### Selfhosted
#### With docker
```bash
docker pull laontme/erbuc:latest
docker run -p 80:3000 -e PORT=3000 -d laontme/erbuc
```
> Note that 80:**3000** and PORT=**3000** must be similar

#### With node
##### Windows
```bat
git clone https://github.com/laontme/erbuc
cd erbuc
yarn
set PORT=3000
yarn start
```

##### Unix
```bash
git clone https://github.com/laontme/erbuc
cd erbuc
yarn
$PORT=3000
yarn start
```

#### Also with heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/laontme/erbuc/tree/main)

## Author
Site: [laont.me](https://laont.me)

Email: [stanislav@laont.me](mailto:stanislav@laont.me)

You can [donate me](https://donatty.com/laontme). It will help me a lot in my endeavors

## License
This repository is licensed under [MIT license](/LICENSE.md). You can freely copy, modify and distribute code, but with notice about license and copyright
