Cucumber-jvm-geb-example
==

skeleton project for demonstrating the integration between Cucumber-jvm and Geb
--
InternetExplorer driver is required as described at https://code.google.com/p/selenium/wiki/InternetExplorerDriver

--
IntelliJ Idea Community edition with Cucumber-JVM and Cucumber-Groovy plugins (installed separately) is recommended for best experience, although plain maven will work as well as Eclipse.

--
To run all the scenarios in the project: 
mvn clean test package

To run a subset of the scenarios in the project: 
mvn clean test package -DtagArg="@myTag"

--
For best experience with windows shell, use ANSICON http://adoxa.altervista.org/ansicon console
