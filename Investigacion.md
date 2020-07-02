# Consigna

# Internet de las cosas (IOT)
# El objetivo del proyecto es lograr un "agregado" de información de manera original.
Ejemplos (complejos - simplificar):

## What is data aggregation?
Data aggregation is the process of gathering data and presenting it in a summarized format. The data may be gathered from multiple data sources with the intent of combining these data sources into a summary for data analysis. This is a crucial step, since the accuracy of insights from data analysis depends heavily on the amount and quality of data used. It is important to gather high-quality accurate data and a large enough amount to create relevant results. Data aggregation is useful for everything from finance or business strategy decisions to product, pricing, operations, and marketing strategies.

Lo que se plantea es proyectar una aplicación que pueda ofrecer una información de manera original utilizando para eso tecnologías de microcontroladores (Arduino) o sistemas físicos reales y la interacción con recursos de información pública en la red (web apis)

Algunos ejemplos de apis públicas:
https://data.buenosaires.gob.ar/
https://www.datos.gob.ar/
https://nordicapis.com/api-discovery-15-ways-to-find-apis/
https://apis.guru/browse-apis/
https://www.programmableweb.com/
https://rapidapi.com/

# RoadMap:

## 1) Obtener información
+ investigar una fuente de información pública (api)
+ probarla y asegurarse que efectivamente funciona

    * Link a Github con prueba de llamado a API: https://github.com/AgustinaGV/TronaldDump
    * Link a API: https://www.tronalddump.io/ - https://docs.tronalddump.io/ - https://www.tronalddump.io/random/quote 

5 puntos - Deadline: 22/5


## 2) Diseñar una aplicación
+ Pensar un uso:
* ¿A quién esta dirigido? (Comunidad: ¿argentina? ¿buenos aires? ¿umai? )
    * Está dirigido a personas con interés en los sucesos políticos y en la participación ciudadana. Escribo esto en medio de una situación de protesta y descontento social muy fuerte en EEUU. Y parte importante de estos reclamos, son dichos y acciones aberrantes por parte del ser bizarro que es eje de este trabajo, es decir, su presidente. 
    Creo que es importante no sólo visibilizar los momentos donde la situación estalla, después de haber aguantado un montón de actitudes y hechos inadmisibles. Me parece que todxs tendríamos que pensar y hacer política siendo conscientes de las acciones cotidianas, y pensarlas como algo que se va sedimentando y termina cristlizando en, por ejemplo, la violencia y racismo institucional.

* ¿Por qué esa información es relevante?
    * Porque en muchos medios de comunicación hay sesgos que limitan nuestro conocimiento de algunos hechos, y tener información nos da más libertad y autonomía, nos permite pensar y evaluar con mayor profundidad. Porque quienes nos gobiernan repercuten en las vidas de todxs. Porque son quienes toman decisiones. Porque nuestro "ejercicio democrático" no debería limitarse al momento de votar, sino que tendríamos que sentirnos representadxs constantemente, entender qué pasa, sentir que quienes gobiernan comparten ideas/valores/pensamientos con nosotrxs.
    "Si no tienes conocimiento de ti mismo y de tu posición en la sociedad y el mundo, entonces tendrás pocas oportunidades de conocer nada más."

* ¿Existe ya?
    * Obras y artistas: (FDT - Fuck Donald Trump) - https://www.unnaturalelection.com/  - https://www.clarin.com/viste/artista-estadounidense-transforma-obras-arte-frases-extravagantes-donald-trump_0_dLgIE2Wta.html (en otro formato, también utiliza frases de Donald Trump)

* ¿Como se implementa y como funciona? (diseño conceptual)
    * La idea es montar la información en una pantalla ¿tv?, con el formato visual que mantienen los noticieros, con una imagen principal y una pequeña placa al estilo Breaking News, que tenga en loop una de las frases que devuelve la API. La imagen principal va a mostrar, también en loop, un paisaje/ciudad/publicidad en el que no pase realmente nada. La imagen principal ocupará el 85% del tamaño de la pantalla (o soporte que se utilice), y la pequeña placa simil Breaking News con la frase en loop el 15% restante, en el margen inferior. Habrá un control remoto con botones disponibles para cambiar de canal, y al ser presionados los botones, cambiará la imagen y la frase pero se mantendrá el formato.
    En relación a las frases, después de varios llamados a la API vi que algunas de las frases no son muy relevantes fuera de contexto o pierden "potencia". También es posible que en mí no causen tanto impacto porque hay muchas cosas de la cultura estadounidense y sucesos políticos cotidianos que a mí se me escapan, básicamente por vivir en otro país y no estar totalmente interiorizada en el tema. Es por esto que al momento de aplicarlas sería necesario crear algún tipo de filtro o selector, eligiendo algunas en relación a temas que se consideren más importantes o capacidad propia de cada frase de construir sentido por sí misma. En relación a crear un filtro, también es importante destacar que al parecer la última actualización de la API fue en diciembre de 2019. Es decir, en estos meses cargados de sucesos tan importantes, no quedó registro (o al menos no por ahora) de los dichos del actual presidente de EEUU.

    * Imagenes referencia: https://www.youtube.com/watch?v=9NSVU4Gv_wA --> ¡¡estética!!- https://www.youtube.com/watch?v=zTBmv-Gzf2w - https://www.youtube.com/watch?v=sBsi5FGbY2Y 

    * Arduino y botones, tutoriales referencia: https://www.youtube.com/watch?v=7ob8CDEmExs&t=1047s - https://www.youtube.com/watch?v=ksNbEuhO4fU&t=2s - https://www.youtube.com/watch?v=58Ynhqmvzoc - https://www.youtube.com/watch?v=LDVWuBcccns 
    * Arduino y TV (podría ser otro soporte que simule ser una TV pero igual busqué para ver si se podían integrar): https://www.youtube.com/watch?v=DT9K0ZZl_rQ - https://www.youtube.com/watch?v=MUeIY_gLn3c (un bardo)

    Mi intención con el diseño de este trabajo es hacer convivir las frases de Trump con distintas imagenes sin relación ni nada para ver ni evaluar. La idea es generar una sensación de extrañeza entre el contenido de las frases y la nula relevancia a nivel visual que van a tener, en este formato de noticiero que busca generar intrigas y dejarnos a la espera de novedades y más información. En paralelo, la posibilidad de cambiar de canal a otros en los que la dinámica es la misma: relevancia 0 a contenido que no solo es importante sino que repercute en nuestra vida.

10 puntos - deadline: 5/6


## 3) Diseñar la interface
* ¿Cuál es la manera mas simple de presentar esa información?
    * Creo que ésta es la manera más sencilla teniendo en cuenta que busca simular el hecho de mirar televisión. Elegir otro soporte, como celular o computadora, sería más sencillo pero se alejaría del contexto que se busca generar.

* ¿Es esa manera la mas original? ¿Provoca un aporte al diseño de interfaces?
    * No es original pero es la idea, sino simular algo pero cambiando el contenido.

* ¿Requiere algún tipo de interacción?
    * Aunque las imagenes de este trabajo se pueden ver y pensar sin la necesidad de la interactividad de usuarixs, también éstos pueden formar parte y darle otro sentido al sentarse frente al *soporte*, o querer cambiar de canal. Creo que el sentido termina de armarse al encontrar algunos elementos familiares no sólo en los videos sino también en la actividad misma, en la pasividad *física* que se tiene al ver la tele/noticiero.
    Aclaro *pasividad física* porque no creo que las personas tengan un rol pasivo al consumir televisión. Esto no es una idea original mía, claramente, sino que hay muchas personas que piensan, hablan, teorizan y un largo etc sobre este tema.


5 puntos - deadline: 12/6

## Investigación API Twitter 
* Nosotras invesitgamos la API de twitter para poder ampliar en el proyecto el espectro de frases posibles y filtrarlas según lo que decidamos. Para esto entramos a https://developer.twitter.com/ y nos fijamos los casos en los que la API estaba permitida usarse, la información que podías pedir y como emplearlo en tu proyecto. Rellenamos los documentos que el sitio tenia dispobiles bajo la cuenta de @MarianelaMaimo para ser aprobada como developer account, en grandes rasgos aclaramos la función de nuestra app y nuestra situación de estudiantes. Sin embargo, hasta el día de hoy no obtuvimos respuesta sobre el permiso y al no poder solicitar la API Key no se puede implementar en el proyecto.