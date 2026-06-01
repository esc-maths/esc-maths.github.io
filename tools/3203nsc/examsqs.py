import numpy as np
import numpy.random as rn

Q = {}
T9=0;  Q[T9]=[3, 5, 6, 7]
E1=10; Q[E1]=[2, 4, 6, 9]
E2=20; Q[E2]=[7, 8, 9]
E3=30; Q[E3]=[2, 4, 6, 7]
E4=40; Q[E4]=[2, 4, 5, 7]
E5=50; Q[E5]=[1, 2, 3, 4]
E6=60; Q[E6]=[3, 7]
E7=70; Q[E7]=[1, 2, 4]
E8=80; Q[E8]=[2, 7, 9]
E9=90; Q[E9]=[2, 4, 9, 10]
E10=100; Q[E10]=[1, 5, 7, 8]

def QQQ(e1,e2,e3):
    Conversation = rn.randint(9)+1
    PossibleElectives=[T9,e1,e2,e3]
    Elective=PossibleElectives[rn.randint(4)]
    Problem=Elective+Q[Elective][rn.randint(len(Q[Elective]))]
    #if Elective==E7:
    #    Problem=Elective+rn.randint(7)+1
    #else:
    #    Problem=Elective+rn.randint(10)+1
    print('Conversation Topic {0}\nProblem {1}'.format(Conversation,Problem))


def QQ(e1,e2):
    Conversation = rn.randint(9)+1
    PossibleElectives=[T9,e1,e2]
    Elective=PossibleElectives[rn.randint(3)]
    Problem=Elective+Q[Elective][rn.randint(len(Q[Elective]))]
    #if Elective==E7:
    #    Problem=Elective+rn.randint(7)+1
    #else:
    #    Problem=Elective+rn.randint(10)+1
    print('Conversation Topic {0}\nProblem {1}'.format(Conversation,Problem))

def examQsOverride(PossibleElectives): # pass in array of T9 or E? values
    Conversation = rn.randint(9)+1
    Elective=PossibleElectives[rn.randint(len(PossibleElectives))]
    Problem=Elective+Q[Elective][rn.randint(len(Q[Elective]))]
    #if Elective==E7:
    #    Problem=Elective+rn.randint(7)+1
    #else:
    #    Problem=Elective+rn.randint(10)+1
    print('Conversation Topic {0}\nProblem {1}'.format(Conversation,Problem))

print(" ready to go\n try a command like e.QQQ(e.E1,e.E2,e.E4)\n or e.QQ(e.E1,e.E2)")
