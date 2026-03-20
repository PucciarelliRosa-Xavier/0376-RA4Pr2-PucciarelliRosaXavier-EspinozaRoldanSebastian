# Activitat: GitHub i aplicacions web

## 1. Reconeix la utilitat de les aplicacions d’ofimàtica web

**1. Explica per què GitHub es pot considerar una aplicació web de treball col·laboratiu.**  
GitHub es pot considerar una aplicació web de treball col·laboratiu perquè funciona a través d’internet i permet que diverses persones treballin en un mateix projecte al mateix temps. Es pot compartir codi, fer modificacions, veure els canvis d’altres i més.

**2. Quins avantatges té utilitzar GitHub en lloc de guardar els fitxers d’un projecte només en un ordinador local?**  
Usar GitHub permet accedir al projecte des de qualsevol dispositiu, evita la pèrdua d’informació, permet recuperar versions anteriors i facilita el treball col·laboratiu, cosa que en local no es pot fer.

**3. Com pot ajudar GitHub a gestionar versions d’un projecte web o d’una aplicació?**  
Les versions es gestionen amb Git, que registra cada canvi que es fa en el projecte.

**4. En quins tipus de projectes és especialment útil utilitzar Git i GitHub?**  
Git i GitHub són útils en qualsevol tipus de projecte en què hi participin diversos col·laboradors o projectes grans, en els que sigui important tenir un control de les versions.

**5. Quines diferències hi ha entre un sistema de control de versions com Git i un sistema tradicional d’emmagatzematge de fitxers?**  
Els sistemes de control de versions, a part de guardar fitxers, també registren tots els canvis que es van fent, de manera que es poden recuperar versions anteriors, comparar modificacions i treballar de manera col·laborativa.  
Els altres sistemes només emmagatzemen fitxers.

---

## 2. Classifica segons la funcionalitat i prestacions específiques

**6. Explica quina és la diferència entre Git i GitHub.**  
Git és una eina que funciona localment per gestionar versions del codi i GitHub és una plataforma en línia que utilitza Git però té altres funcionalitats per compartir i col·laborar en projectes.

**7. Quines funcionalitats ofereix GitHub a més del control de versions del codi?**  
GitHub ofereix funcions relacionades amb la gestió de tasques, la revisió de codi, la comunicació entre usuaris i la possibilitat de publicar pàgines web amb GitHub Pages.

**8. Defineix les funcionalitats de GitHub segons el seu ús:**

- **Repositoris:** són espais on es guarda un projecte amb tots els seus fitxers i l’historial de canvis.  
- **Issues:** serveixen per reportar errors, proposar millores o organitzar tasques dins del projecte.  
- **Pull requests:** són propostes de canvi que permeten revisar i discutir modificacions abans d’afegir-les al projecte principal.  
- **GitHub Pages:** és un servei que permet publicar pàgines web directament des d’un repositori.

**9. Quina funció tenen les branques (branches) en Git?**  
Les branques permeten treballar en diferents versions d’un projecte de manera independent. Això facilita el desenvolupament, ja que permet afegir funcionalitats i corregir errors sense afectar la versió principal fins que els canvis estiguin preparats.

**10. Per a què serveixen les pull requests en un projecte col·laboratiu?**  
Les pull requests serveixen per proposar canvis en un projecte. Els altres membres poden revisar el codi abans d’implementar-lo.

---

## 3. Gestiona els comptes d’usuari

**11. Què és un compte d’usuari a GitHub i per què és necessari per treballar amb repositoris remots?**  
Un compte d’usuari és un perfil personal amb el qual s’accedeix a GitHub. És necessari per identificar qui ha fet les modificacions en el codi i per poder compartir el projecte amb altres.

**12. Quina diferència hi ha entre un repositori públic i un privat a GitHub?**  
Un repositori públic és accessible per qualsevol persona. En canvi, un repositori privat només pot ser vist i modificat pels usuaris que tenen permís.

**13. Com es pot afegir un col·laborador a un repositori de GitHub?**  
Per afegir un col·laborador, cal accedir a la configuració del repositori, anar a la secció de col·laboradors i introduir el nom d’usuari o el correu de la persona que volem afegir. Aquesta persona haurà d’acceptar la invitació i ja podrà col·laborar.

**14. Quins rols o permisos pot tenir un usuari dins d’un repositori?**

- **Només lectura:** es pot veure el contingut del repositori, llegir el codi i consultar l’historial de canvis, però no es poden fer modificacions.  
- **Escriptura:** l’usuari pot modificar el repositori, afegir fitxers, fer commits i pujar canvis.  
- **Administració:** té control total sobre el repositori: pot afegir o eliminar col·laboradors, canviar configuracions, gestionar permisos i fins i tot eliminar el repositori.

**15. Per què és important gestionar correctament els permisos dels usuaris en un projecte col·laboratiu?**  
És important per garantir la seguretat del projecte i mantenir una bona organització del treball.

---

## 4. Aplica criteris de seguretat en l’accés dels usuaris

**16. Quins riscos pot tenir compartir un repositori amb massa permisos per a tots els usuaris?**  
Depenent dels permisos que s’assignin podrien haver diferents problemes, com per exemple que alguns usuaris facin canvis no desitjats o que eliminin fitxers.

**17. Per què és recomanable utilitzar autenticació segura (com tokens o SSH) per accedir a GitHub?**  
Perquè aquests mètodes són més segurs que utilitzar només contrasenyes. Les contrasenyes podrien ser robades o filtrades pels atacants, però amb aquests mètodes s’afegeix una capa extra de seguretat.

**18. Què passaria si es publiquen contrasenyes o claus privades dins d’un repositori?**  
Si el repositori és públic, qualsevol persona podria veure les contrasenyes i provocaria molts problemes.  
Si és privat i els permisos estan ben gestionats, només podran accedir els usuaris assignats, però continuaria sent un risc.

**19. Quines bones pràctiques de seguretat s’han de seguir quan es treballa amb GitHub?**  
No compartir contrasenyes, utilitzar autenticació segura, controlar els permisos dels usuaris i no pujar informació privada als repositoris.

**20. Per què és important controlar qui pot fer push directament a la branca principal (main)?**  
Per evitar que es cometin errors o canvis incorrectes en la versió principal del projecte. És important assegurar-se que el codi ha estat revisat abans d’afegir-se a la branca main.

---

## 5. Utilitza les aplicacions de forma cooperativa

**21. Explica com poden treballar diverses persones al mateix projecte utilitzant GitHub.**  
Diverses persones poden treballar en el mateix projecte creant diferents branques. En aquestes branques es fan els canvis i després es combinen amb pull requests. D’aquesta manera els diferents usuaris poden treballar de manera independent sense afectar els altres.

**22. Per què és útil treballar amb branques en lloc de modificar directament la branca principal?**  
Perquè permet fer canvis de manera independent sense afectar la versió principal ni perjudicar el treball de la resta de col·laboradors. Un cop els canvis són correctes i revisats, es poden incorporar a la branca principal.

---

## 6. Elabora documentació relativa a l’ús i la gestió de les aplicacions

**23. Per què és important incloure un fitxer README.md en un repositori de GitHub?**  
Perquè explica què és el projecte, com funciona i com treballar en aquell entorn, de manera que els col·laboradors tenen un millor enteniment del projecte.

**24. Quins avantatges té utilitzar Markdown per escriure documentació a GitHub?**  
És relativament fàcil d’utilitzar i permet donar format al text per visualitzar-lo correctament a GitHub.

**25. Com pot ajudar la documentació a altres desenvolupadors que volen utilitzar o modificar el projecte?**  
La documentació conté tota la informació necessària per als col·laboradors, ajudant-los a entendre el funcionament del projecte, facilitant el seu treball i reduint la possibilitat d’errors.
