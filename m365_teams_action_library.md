### Create Service Client 

#### Description

Create a Microsoft Service Client (Delegate Permission) to use Graph API for all the action in M365 Teams Action Library. The Email Name represents one user to do all the action. It only needs to appear once for all action. The only parameter needed is email name, which is config in Gateway Configuration (Email OAuth).

### Send Channel Message

#### Description

Sending Message in Teams Channel, can contain mention, body message and attachments. The Message Body Must contain at least one of this 3 parameters.

#### Steps

1.	Add the “Create Service Client” job into the script and set the email name.
2.	Add the “Send Channel Message” job into the script.
3.	Set the Teams and Channels name to specify which channels you want to send.
4.	Enter the information you want to send in the Message Body.
5.	Optional, you can attach multiple files by providing the full path for each file and separate them by using “;”.
6.	Optional, you can mention multiple user(@UserName) by providing the email address for each user in the channel and separate them by using “;”.


### Search Channel Message

#### Description

Search a message in specify Channel base on filtering.



#### Steps 

1.	Add the “Create Service Client” job into the script and set the email name.
2.	Add the “Search Channel Message” job into the script.
3.	Set the Teams and Channels name to specify which channels you want to search.
4.	Set the time range for the message you want to search.
5.	Set the filter for the message you want to search.
6.	Set the keyword for the filter.
7.	The action will return to you 3 GVariables which is how many records are found, is there any record found(true/false), and the list of the message id of the records.


### Reply Channel Message

#### Description

Reply a Message in Channel, Message ID must be provided, and it can get from “Search Channel Message” Action. 

#### Steps

1.	Add the “Create Service Client” job into the script and set the email name.
2.	Add the “Search Channel Message” job into the script for finding messages id to reply.
3.	Add the “Reply Channel Message” job into the script.
4.	Set the Teams and Channels name to specify which channels you want to reply.
5.	Set the Message ID from “Search Channel Message” to locate specify message to reply.
6.	Enter the information you want to reply to in the Message Body.
7.	Optional, you can attach multiple files by providing the full path for each file and separate them by using “;”.
8.	Optional, you can mention multiple user(@UserName) by providing the email address for each user in the channel and separate them by using “;”.


### Attach Channel Document

#### Description

Only Attach Document into a Channel. All attachment in channel will be store at the SharePoint.

#### Steps

1.	Add the “Create Service Client” job into the script and set the email name.
2.	Add the “Attach Channel Message” job into the script.
3.	Set the Teams and Channels name to specify which channels you want to send attachment.
4.	Set the full path for each file you want to attach, separate them by using “;”.

### Save Channel Attachment

#### Description 
Save Attachment from a Channel Message, must provide channel message id. Can select specify extension and the output folder to save.


#### Steps

1.	Add the “Create Service Client” job into the script and set the email name.
2.	Add the “Search Channel Message” job into the script for finding messages id.
3.	Add the “Save Channel Attachment” job into the script.
4.	Set the Teams and Channels name to specify which channels you want to save attachment.
5.	Set the Message ID from “Search Channel Message” to locate specify message for save attachment on that message.
6.	Optional, you can specify to save file fore certain extensions like “pdf, doc” by configuring “Extension”.
7.	Set the output folder path for the file.


### Send Chat Message

#### Description

Send a Message in Microsoft Teams Chat. Must provide the target email address, not display name.

#### Steps 

1.	Add the “Create Service Client” job into the script and set the email name.
2.	Add the “Save Chat Message” job into the script.
3.	Set the Target Email to specify which user you want to send to. If you want to send it into group chat, you need to include all email in that group chat.
4.	Enter the information you want to send in the Message Body.
5.	Optional, you can attach multiple files by providing the full path for each file and separate them by using “;”.
6.	Optional, you can mention multiple user(@UserName) by providing the email address for each user in the channel and separate them by using “;”.

### Get Unread Chat

#### Description

Get all unread chat and return all email address invoke in that chat.

#### Steps

1.	Add the “Create Service Client” job into the script and set the email name.
2.	Add the “Get Unread Chat” job into the script.
3.	The action will return to you 3 GVariables which is how many records are found, is there any record found(true/false), and the list of the email in the chat of the records.


### Get Chat Message

#### Description 

Get a message in a chat. 

#### Steps 

1.	Add the “Create Service Client” job into the script and set the email name.
2.	Add the “Get Chat Message” job into the script.
3.	Set the Target Email to specify which user you want to send to. If you want to send it into group chat, you need to include all email in that group chat.
4.	Set the time range for the message you want to search.
5.	Set the filter for the message you want to search.
6.	Set the keyword for the filter.
7.	The action will return to you 3 GVariables which is how many records are found, is there any record found(true/false), and the list of the message id of the records.

### Save Chat Attachment

#### Description

Save Attachment from a chat message, must provide chat messages id. Can select specify extension and the output folder to save.

#### Steps

1.	Add the “Create Service Client” job into the script and set the email name.
2.	Add the “Get Chat Message” job into the script for finding messages id.
3.	Add the “Save Chat Attachment” job into the script.
4.	Set the Target Email to specify which user you want to send to. If you want to send it into group chat, you need to include all email in that group chat.
5.	Set the Message ID from “Get Chat Message” to locate specify message for save attachment on that message.
6.	Optional, you can specify to save file for certain extensions like “pdf, doc” by configuring “Extension”.
7.	Set the output folder path for the file.



