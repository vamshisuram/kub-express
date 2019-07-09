# kub-express
Express backend for kubernetes trials
This is a part of a cluster of servers which include

- https://github.com/vamshisuram/kub-ui 

- https://github.com/vamshisuram/kub-express

- https://github.com/vamshisuram/kub-sa


UI (react based) is served by nginx docker container, which talks to backend (nodejs/express). 
Backend talks to analytics engine (python) and gives polarity of sentence.

UI (sentence) -> backend -> analytics (polarity calculation)

To run this container
docker run -it -e ANALYTICS_IP="<ip of analytics docker container>" -p 3001:3001 vamshisuram/sa-backend

