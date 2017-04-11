dummy_data = [

    {
        "author":"Nick deLannoy",
        "date":"12/12/12",
        "content":"This is a message, this is a message. this is a message this is a message.",
        "comments":[

            {
            "author":"Evie",
            "date":"10/10/10",
            "content":"This is a comment, this is a comment, this is a comment",
            },
            {
            "author":"Joe",
            "date":"10/10/10",
            "content":"This is a comment, this is a comment, this is a comment",
            },
            {
            "author":"Bob",
            "date":"10/10/10",
            "content":"This is a comment, this is a comment, this is a comment",
            }
        ]
    },
    {
        "author":"Evie deLannoy",
        "date":"12/12/15",
        "content":"This is a message, this is a message. this is a message this is a message.",
        "comments":[

            {
            "author":"Nick",
            "date":"11/11/11",
            "content":"This is a comment, this is a comment, this is a comment",
            },
            {
            "author":"Joe",
            "date":"12/12/12",
            "content":"This is a comment, this is a comment, this is a comment",
            },
            {
            "author":"Bob",
            "date":"10/13/13",
            "content":"This is a comment, this is a comment, this is a comment",
            }
        ]
    }
]

print dummy_data
print "-----------------------------"
for message in dummy_data:
    print "Message author:", message["author"]
    print "Message date:", message["date"]
    print "Message content:", message['content']
    print "Message comments:", message['comments']
