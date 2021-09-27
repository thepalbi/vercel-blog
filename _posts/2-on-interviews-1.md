---
tag: "interviews"
title: "Interview notes: [DB]FS, your new best friend"
excerpt:
    "First edition on Interview Notes, featuring tree traversals."
date: "Tue, 07 Apr 2020"
author:
    name: Pablo
    twitter: "https://twitter.com/pablolbalbi"
    picture: ""
ogImage:
    url: "/assets/meta/blogSimple.jpg"
---
I've being part of interviews for a while now. Just from the interviewee side to clarify, still missing the other. The thing is that after some of them I began to realize that interviewing, read here the ability to perform during one of such, is a skill one can practice. This post will be some kind of compilation of notes I've taken while practicing, but just concerning the technical challenges in them.

Just for giving some background, this will have things such as patterns discovered across exercises, comments about algorithmic techniques, some insights and new ways of solving problems gathered from a bunch of friends who competed in ACM-like competitions. So let's get into it.  

### Some general things to keep in mind

Let's say you start with a problem `P`, and you don't have a clear solution in mind. Here are some things I found useful, both in interviews and life to either solve the problem, improve the solution a bit, or at least get ideas flowing:

- **Consider the brute-force solution**. Some times you will think something like: _Hey, no way I'm doing the brute-force. It's a horrible exponential monstrosity_. The point isn't that this is our last call, but to first get you thinking about how the problem is solved, and while doing so you could discover some specific property of the problem that can be leveraged to obtain a more performant solution.
- In the case the brute-force solution cost is over \[katex\]O(n^2)\[/katex\], you should consider if **first sorting the input**, which has a cost of \[katex\]O(n \* log(n))\[/katex\], helps in solving the problem. Keep in mind that for this to be worth, the cost of `sort + solve_sorted` has to be less than the `brute force`.
- If the problem consists somehow of _finding an element, or a bunch of elements that verify some property_ objective, and the container of the elements is sorted, consider using a **binary search**. This might not work for finding the exact solution, but at least you can narrow the collection in which you are looking into.
- Always consider that `hashmap`(read here Python's [dictionary](\"https://docs.python.org/3/tutorial/datastructures.html?highlight=dictionary#dictionaries\"), Java's [HashMap](\"https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html\"), Ruby hashes, etc.) operations for getting and putting values are \[katex\]O(1)\[/katex\].

### Depth/Breath First Search: Your all-time good friend

You'll be surprised about the amount of things that can be solved just by using a fine-tuned version of this exploration algorithm. Here are some takeaways I've gathered from using our new best friend (not a dog, obviously), and a generic pseudo-code.

First, here's a sketch implementation we'll use as discussion framework.

```python
class Node:
    def __init__(self, value, neighbours):
        self.value = value
        self.neighbours = neighbours

    def visit(node):
        pass

    def mark_as_visited(node):
        pass

    def visited?(node):
        pass

    def get_neighbours(node):
        pass

    # This is the main DFS/BFS method
    def explore_tree(node):
        q = [node]
        while len(q) > 0:
            next_to_visit = q.get_next()
            visit(next_to_visit)
            mark_as_visited(next_to_visit)
            for neigh in get_neighbours(next_to_visit):
                if not visited?(neigh):
                    q.add(neigh)
```

Some comments about this code.

First, notice that the interaction with `q` is with some weird `q.get_next` and `q.add` methods. This is because depending on how you put or get elements from `q`, which is our not visited elements buffer, you end up doing a _breath_ or a _depth_ _first_ traversal. [Here](\"https://visualgo.net/en/dfsbfs\") you can watch an interactive version of each variant, when in doubt.

Second, consider that `next_to_visit` isn't necessarily the node. You might want to store some more data, like a context, when you are doing the exploration. As an example consider that if you are looking for a path that validates some property, you might want to save something like `(path_summary_so_far, neighbour_to_add)`.

Third, notice that the `mark_as_visited` and the `visited?` have been extracted as separate methods, because you might not want to just mark a node as visited once it's seen (for example if you are looking for an optimal path that contains like was mentioned before, and that node could be part of several paths).

Forth, always remember that the data structure we are exploring doesn't have to be a tree, but a graph (in it's most abstract form). Just a bunch of connected nodes.

Fifth, knowing that we might not be exploring a graph, notice I've also extracted the `get_neighbours`. That's because they way we present the neighbours of a node to our algorithm has the following impact:

- It sets the _distance_ between our current node, and it's neighbour. For example, if we are optimizing a path by it's length, we can change how the distance from some node to its follower is evaluated.
- We might want to filter some adjacent nodes, and be picky on which ones to explore.

That's all for now folks. Keep tuned for some other emission of _Palbi's guide to interviews_.