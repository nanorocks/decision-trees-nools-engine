# decision-trees-nools-engine
Decision Tree model with nools rules. Java script rule engine.

### Description

The Rule Engines are powerful declarative programming mechanism. Software engineers can focus on solving rule-based
problems without thinking how the engine solves those problems as well as the order of the calculation steps.
Nools is JavaScript implementation of the famous Rete algorithm. Usually, rule engine libraries support Decision Tables out-
of-the-box. The rules can be specified in an Excel like spreadsheet defining that way one rule per row.
Decision Tree is also an interesting structure that can help is classify things. Decision Trees do not come out-of-the-box with
Nools, but we can somehow model them.
Here is a Decision Tree that classifies a product into four categories: A, B, C and D, based on the product’s three features: F1,
F2 and F3

![alt image](https://i.ibb.co/R63Whrj/Screenshot-4.png)

### Requirement

Model this Decision Tree with Nools rules!
Demonstrate the classification on the following products:
P1: (F1= 5, F2=50, F3=50) => category=?
P2: (F1= 5, F2= 5, F3= 5) => category=?
P3: (F1=70, F2=80, F3=75) => category=?
P4: (F1=60, F2=15, F3=55) => category=?

### Solution  
- first run **npm install**
- next run **npm test**
