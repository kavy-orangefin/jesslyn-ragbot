# Action Library Commands

## Attend Command

### Message Box

#### Objective
To create a Message Box on screen.

#### Table Field
  ------------------- ---------------------------------------------------
  Field               Description

  Task Name           Name of the task belong to the group

  Task Description    Input text that represents the Description to
  (input)             describe the task. This is optional.

  Message to Display  The input text that will be displayed in a message
  (input)             box once the OrangeBot runs the task.
  ------------------- ---------------------------------------------------

#### Steps

1.  Set Message to Display as "123".

All fields not seen here do not need to be filled.

After: The Bot creates a Message Box with the message "123". Click Okay
to close.

### Confirmation

#### Objective
To confirm if a displayed message is accurate.

#### Table Field
  ------------------- ---------------------------------------------------
  Field               Description

  Task Name           Name of the task belong to the group

  Task Description    Input text that represents the Description to
  (input)             describe the task. This is optional.

  Message to Display  The input text that will be displayed in a message
  (input)             box once the OrangeBot runs the task. For
                      Confirmation tasks, it is usually used for Yes Or
                      No questions.

  If Not, Proceed to  This allows the user to go to other tasks in the
  (Dropdown list)     script if the user clicks No once the OrangeBot
                      runs the task. This will show a list of which task
                      the OrangeBot will run next if the user clicks No.
  ------------------- ---------------------------------------------------

No need to edit the Waiting task. Just add it to the script.

In this case, we will have the OrangeBot ask "Are you below 65 years
old?" If the user clicks Yes, it will display a Message box. If No, it
will skip to Task 3.

#### Steps

Confirmation

1.  Set Message to Display as "Are you below 65 years old?".


All fields not seen here do not need to be filled.

After: The Bot will ask if the reader is below 65 years old. If the user
clicks Yes, it will go to Task 2 and create a message box. If not, it
will skip to Task 3 and exit the Job.

### Confirmation (Info)

#### Objective
To confirm the displayed information is accurate.

#### Table Field
  ------------------- ---------------------------------------------------
  Field               Description

  Task Name           Name of the task belong to the group

  Task Description    Input text that represents the Description to
  (input)             describe the task. This is optional.

  Message to Display  The input text that will be displayed in a message
  (input)             box once the OrangeBot runs the task. For
                      Confirmation tasks, it is usually used for Yes Or
                      No questions.

  Confirmation        This will be the input text data that needs to be
  (input)             checked if it is accurate. If Yes, the user should
                      click Yes. If No, the user should click No.

  If Not, Proceed to  This allows the user to go to other tasks in the
  (Dropdown list)     script if the user clicks No once the OrangeBot
                      runs the task. This will show a list of which task
                      the OrangeBot will run next if the user clicks No.
  ------------------- ---------------------------------------------------

First, create this script:

No need to edit the Waiting task. Just add it to the script. In this
case, we will have the OrangeBot ask "Is the Number Equal to 5?" If the
user clicks Yes, it will display a message box. If No, it will skip to
Task 3.

#### Steps



1.  Set Message to Display as "Is the number equal to 5? No: 5".

2.  Set If Not Proceed to? As 3.

All fields not seen here do not need to be filled.



After: The Bot will ask if the Number equals to 5. If the user clicks
Yes, it will go to Task 2 and send an email. If not, it will skip to
Task 3 and exit the Job.

### Confirmation (Value Entry)

#### Objective
To confirm if the displayed information of multiple types of
data is accurate.

#### Table Field
+-------------------+--------------------------------------------------+
| Field             | Description                                      |
+-------------------+--------------------------------------------------+
| Task Name         | Name of the task belong to the group             |
+-------------------+--------------------------------------------------+
| Task Description  | Input text that represents the Description to    |
| (input)           | describe the task. This is optional.         |
+-------------------+--------------------------------------------------+
| Confirmation      | The input text that will be displayed in a       |
| Message (input)   | message box once the OrangeBot runs the task.    |
|                   | For Confirmation tasks, it is used for Yes Or No |
|                   | questions.                                       |
+-------------------+--------------------------------------------------+
| Label Name        | The input labels that will be displayed in the   |
| (input)           | Message Box when the OrangeBot runs the task.    |
|                   | The user can place more than one as long as they |
|                   | use ";". For example, "1;2;3".                   |
+-------------------+--------------------------------------------------+
| Field Type        | This is the format of the input text that will   |
| (input)           | be displayed. There are 2 types of Field Type:   |
|                   |                                                  |
|                   | i\) Text -- String Format (Words, Numbers &      |
|                   | Special Characters)\                             |
|                   | ii) Date -- Date Format (dd/MM/yyyy)             |
+-------------------+--------------------------------------------------+
| Default Value     | The input data that will be displayed in the     |
| (input)           | Message Box when the OrangeBot runs the task.    |
|                   | The user can place more than one as long as they |
|                   | use ";". For example, "1;2;3".                   |
+-------------------+--------------------------------------------------+
| Gvariable to Save | A Gvariable(s) created by the user. All          |
| (Dropdown List)   | Gvariables created/auto generated will be in the |
|                   | list. The user can place more than one as long   |
|                   | as they use ";". For example, "1;2;3". It must   |
|                   | match the number of Default Values. If there are |
|                   | 3 default values, there must be 3 Gvariables.    |
+-------------------+--------------------------------------------------+
| If Not, Proceed   | This allows the user to go to other tasks in the |
| to (Dropdown      | script if the user clicks No once the        |
| list)             | OrangeBot runs the task. This will show a list   |
|                   | of which task the OrangeBot will run next if the |
|                   | user clicks No.                                  |
+-------------------+--------------------------------------------------+

Go to Global Variable and click "Add New Global Variable".

You need to create these Global Variables.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps


1.  Set Confirmation Message as "Is this Confirmed?".

2.  Set Label Name as "Full Name;IC;Date of Birth".

3.  Set Field Type as "Text;Text;Date".

4.  Set Default Value as "John Doe;8626551651;24/7/1886".

5.  Set Gvariable to Save as "GVariable1;GVariable2;GVariable3".(this
    will create Global Variables)

6.  Set If Not Proceed to? as 3.



All fields not seen here do not need to be filled.

After: The Bot will ask if the details are correct (the user can edit
the details). If the user clicks Yes, it will go to Task 2 and display a
Message Box. If not, it will skip to Task 3 and exit the Job.

After: If the user clicks Yes, Check the Job Debugger and scroll
down to see the results.

After: If the user clicks Yes, the OrangeBot will save the data in these
Global Variables.

### Confirmation (Comparison)

#### Objective
To confirm if the displayed information of multiple types of
data is accurate.

#### Table Field
  ----------------- -----------------------------------------------------
  Field             Description

  Task Name         Name of the task belong to the group

  Task Description  Input text that represents the Description to
  (input)           describe the task. This is optional.

  Title Text        The input text that will be the Title that will be
  (input)           displayed above the Message Box.

  Description Left  The input text data that will be displayed for the
  (input)           first column. This will display the First data that
                    needs to be compared to the Second data.

  Description Right The input data that will be displayed for the first
  (input)           column. This will display the Second data that needs
                    to be compared to the First data.

  Confirmation      The input text that will be displayed in a message
  Message (input)   box once the OrangeBot runs the task. For
                    Confirmation tasks, it is used for Yes Or No
                    questions.

  If Not, Proceed   This allows the user to go to other tasks in the
  to (Dropdown      script if the user clicks No once the OrangeBot
  list)             runs the task. This will show a list of which task
                    the OrangeBot will run next if the user clicks No.
  ----------------- -----------------------------------------------------

First, create this script:

No need to edit the Waiting task. Just add it to the script.

#### Steps


1.  Set Title Text as "IC Number".

2.  Set Description Left as "IC".

3.  Set Description Right as "9886514896456126".

4.  Set Confirmation Message as "Is this Confirmed?"

5.  Set If Not Proceed to? as 3.

All fields not seen here do not need to be filled.


After: The Bot will ask if both messages match. If the user clicks Yes,
it will go to Task 2 and display a Message Box. If not, it will skip to
Task 3 and exit the Job.

### Confirmation (File List)

#### Objective
To confirm if the displayed Files in a chosen Folder in a
Message Box is accurate.

#### Table Field
  ----------------- -----------------------------------------------------
  Field             Description

  Task Name         Name of the task belong to the group

  Task Description  Input text that represents the Description to
  (input)           describe the task. This is optional.

  Confirmation      The input text that will be displayed in a message
  Message (input)   box once the OrangeBot runs the task. For
                    Confirmation tasks, it is used for Yes Or No
                    questions.

  File's Folder     Input text for the path of a folder. This allows the
  Path (input)      user to search a chosen Folder Path where the
                    OrangeBot will search all the files in a folder.

  If Not, Proceed   This allows the user to go to other tasks in the
  to (Dropdown      script if the user clicks No once the OrangeBot
  list)             runs the task. This will show a list of which task
                    the OrangeBot will run next if the user clicks No.
  ----------------- -----------------------------------------------------

Before: We need to the Bot the collect the data regarding the file
listing of the folder "Sample".

First, create this script:

No need to edit the Waiting task. Just add it to the script.

#### Steps


1.  Set Confirmation Message as "Is this Confirmed?"

2.  Set File's Folder Path as the folder to search.

3.  Set If Not Proceed to? as 3.

All fields not seen here do not need to be filled.



After: The Bot will show a list of the files in the Sample folder. If
you click "View", it will open the file. If the user clicks Yes, it will
go to Task 2 and display a Message Box. If not, it will skip to Task 3
and exit the Job.

### Value Entry

#### Objective
To collect data from the user.

#### Table Field
+----------------+-----------------------------------------------------+
| Field          | Description                                         |
+----------------+-----------------------------------------------------+
| Task Name      | Name of the task belong to the group                |
+----------------+-----------------------------------------------------+
| Task           | Input text that represents the Description to       |
| Description    | describe the task. This is optional.            |
| (input)        |                                                     |
+----------------+-----------------------------------------------------+
| Message to     | The input text that will be displayed in a message  |
| Display        | box once the OrangeBot runs the task. This is used  |
| (input)        | for questions.                                      |
+----------------+-----------------------------------------------------+
| Label Name     | The labels that will be displayed in the Message    |
| (input)        | Box when the OrangeBot runs the task. The user can  |
|                | place more than one as long as they use ";". For    |
|                | example, "1;2;3".                                   |
+----------------+-----------------------------------------------------+
| Field Type     | This is the format of the information that will be  |
| (input)        | displayed. There are 2 types of Field Type:         |
|                |                                                     |
|                | i\) Text - String Format (Words, Numbers & Special  |
|                | Characters)\                                        |
|                | ii) Date - Date Format (dd/MM/yyyy)                 |
+----------------+-----------------------------------------------------+
| Gvariable to   | A Gvariable(s) created by the user. All Gvariables  |
| Save (Dropdown | created/auto generated will be in the list. The     |
| List)          | user can place more than one as long as they use    |
|                | ";". For example, "1;2;3". It must match the number |
|                | of Default Values. If there are 3 default values,   |
|                | there must be 3 Gvariables.                         |
+----------------+-----------------------------------------------------+

Make sure to set Task 2 as Toggle Breakpoint.

#### Steps

1.  Set Message to Display as "Please fill in your details".

2.  Set Label name as "Name;IC;DOB".

3.  Set Field Type as "Text;Text;Date".

4.  Set Gvariable To Save as "Name;IC;DOB".

All fields not seen here do not need to be filled.



After: The Bot will ask the user to fill in their information then click
Okay.

After: Check Job Debugger and scroll down to see the results.

After: Once that is done, these Global Variables will be created with
the values filled in by the user.

### Value Entry (Check Box List)

#### Objective
To collect data from the user of which option (1st, 2nd
index) they prefer in the form of a multiple choice question.

#### Table Field
+----------------+-----------------------------------------------------+
| Field          | Description                                         |
+----------------+-----------------------------------------------------+
| Task Name      | Name of the task belong to the group                |
+----------------+-----------------------------------------------------+
| Task           | Input text that represents the Description to       |
| Description    | describe the task. This is optional.            |
| (input)        |                                                     |
+----------------+-----------------------------------------------------+
| Message to     | The input text that will be displayed in a message  |
| Display        | box once the OrangeBot runs the task. This is used  |
| (input)        | for questions.                                      |
+----------------+-----------------------------------------------------+
| Choices        | The input text that will be the options in the      |
| (input)        | multiple choice question set by the user. The user  |
|                | may put as many choices as they want as long as     |
|                | they use ";". For example, "A;B;C;D", then there    |
|                | will be four options.                               |
+----------------+-----------------------------------------------------+
| Result Mode    | The list for the user to choose the Format of the   |
| (Dropdown      | Result Generated. The user may choose to have the   |
| list)          | generated result to be in the form of:              |
|                |                                                     |
|                | > a\) Index                                         |
|                | >                                                   |
|                | > b\) Number                                        |
|                | >                                                   |
|                | > c\) Text                                          |
+----------------+-----------------------------------------------------+
| Gvariable to   | A Gvariable(s) created by the user. All Gvariables  |
| Save (Dropdown | created/auto generated will be in the list. The     |
| List)          | user can place more than one as long as they use    |
|                | ";". For example, "1;2;3". It must match the number |
|                | of Default Values. If there are 3 default values,   |
|                | there must be 3 Gvariables.                         |
+----------------+-----------------------------------------------------+

### Check Box Result as Index

#### Objective
To collect data from the user of which option (1st, 2nd
index) they prefer in the form of a multiple choice question. An Index
refers to the position in a list of options, except that an Index starts
with 0, not 1. So in an Index, 0 = 1st option, 1 = 2nd option.

Make sure to set Task 2 as Toggle Breakpoint. No need to edit the
Waiting task. Just add it to the script.

Go to Global Variable and click "Add New Global Variable".

You need to create a new Global Variable.

#### Steps

1.  Set Message to Display as "Please select your favourite letters from
    Alphabet List below."

2.  Set Choices as "A;B;C;D;E".

3.  Set Result Mode as Result as Index.

4.  Set Gvariable To Save.

All fields not seen here do not need to be filled.

After: The Bot will ask the user ask them to choose their favourite
letter.

After: Check Job Debugger and scroll down to see the results.

After: The Bot now knows that the user chose the 2nd option (Index 1
means 2nd option).

  

### Check Box Result as Number

#### Objective
To collect data from the user of which option (1st, 2nd) they
prefer in the form of a multiple choice question. The Number refers to
the position in a list of options, starting with 1. So in an Index, 1 =
1st option, 2 = 2nd option.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Go to Global Variable and click "Add New Global Variable".

You need to create a new Global Variable.

#### Steps

1.  Set Message to Display as "Please select your favourite letters from
    Alphabet List below."

2.  Set Choices as "A;B;C;D;E".

3.  Set Result Mode as Result as Number.

4.  Set Gvariable To Save.

All fields not seen here do not need to be filled.

After: The Bot will ask the user to choose their favourite letter.

After: Check Job Debugger and scroll down to see the results.

After: The Bot now knows that the user chose option Number 2.

  

### Check Box Result as Text

#### Objective
To collect data from the user of which option they prefer in
the form of a multiple choice question.

Make sure to set Task 2 as Toggle Breakpoint.

Go to Global Variable and click "Add New Global Variable".

You need to create a new Global Variable.

#### Steps

1.  Set Message to Display as "Please select your favourite letters from
    Alphabet List below."

2.  Set Choices as "A;B;C;D;E".

3.  Set Result Mode as Result as Text.

4.  Set Gvariable To Save.

All fields not seen here do not need to be filled.

After: The Bot will ask the user to choose their favourite letter.

After: Check Job Debugger and scroll down to see the results.

After: The Bot now knows that the user chose B.

### Value Entry (Text Box)

#### Objective
To collect data from the user in the form of a text box.

#### Table Field
  ----------------- -----------------------------------------------------
  Field             Description

  Task Name         Name of the task belong to the group

  Task Description  Input text that represents the Description to
  (input)           describe the task. This is optional.

  Message to        The input text that will be displayed in a message
  Display (input)   box once the OrangeBot runs the task. This is used
                    for questions.

  Label Name        The labels that will be displayed in the Message Box
  (input)           when the OrangeBot runs the task. The user can place
                    more than one as long as they use ";". For example,
                    "1;2;3".

  Gvariable to Save A Gvariable(s) created by the user. All Gvariables
  (Dropdown List)   created/auto generated will be in the list. The user
                    can place more than one as long as they use ";". For
                    example, "1;2;3". It must match the number of Default
                    Values. If there are 3 default values, there must be
                    3 Gvariables.
  ----------------- -----------------------------------------------------

Make sure to set Task 2 as Toggle Breakpoint. No need to edit the
Waiting task. Just add it to the script.

Go to Global Variable and click "Add New Global Variable".

You need to create a new Global Variable.

#### Steps

1.  Set Message to Display as "Please fill in your IC Number".

2.  Set Label name as "IC Number".

3.  Set Gvariable To Save.

All fields not seen here do not need to be filled.

After: The Bot will ask the user to fill in their IC Number then click
Submit.

After: Check Job Debugger and scroll down to see the results.

After: Once that is done, the IC number is saved in a Global Variable.

### Value Entry (DateTime)

#### Objective
To collect data from the user regarding the date.

#### Table Field
  ----------------- -----------------------------------------------------
  Field             Description

  Task Name         Name of the task belong to the group

  Task Description  Input text that represents the Description to
  (input)           describe the task. This is optional.

  Message to        The input text that will be displayed in a message
  Display (input)   box once the OrangeBot runs the task. This is used
                    for questions.

  Label Name        The labels that will be displayed in the Message Box
  (input)           when the OrangeBot runs the task. The user can place
                    more than one as long as they use ";". For example,
                    "1;2;3".

  Gvariable to Save A Gvariable(s) created by the user. All Gvariables
  (Dropdown List)   created/auto generated will be in the list. The user
                    can place more than one as long as they use ";". For
                    example, "1;2;3". It must match the number of Default
                    Values. If there are 3 default values, there must be
                    3 Gvariables.
  ----------------- -----------------------------------------------------

Make sure to set Task 2 as Toggle Breakpoint. No need to edit the
Waiting task. Just add it to the script.

Go to Global Variable and click "Add New Global Variable".

You need to create a new Global Variable.

#### Steps
1.  Set Message to Display as "When do you want to have the meeting?".

2.  Set Gvariable To Save.

All fields not seen here do not need to be filled.

After: The Bot will ask the user to key in a date time, click "Add", and
then click "Submit".

After: Check Job Debugger and scroll down to see the results.

After: Once that is done, the date and time is saved in a Global
Variable.

### Value Entry (Radio Button List)

#### Objective
To collect data from the user of which option they prefer in
the form of a multiple choice question.

#### Table Field
+----------------+-----------------------------------------------------+
| Field          | Description                                         |
+----------------+-----------------------------------------------------+
| Task Name      | Name of the task belong to the group                |
+----------------+-----------------------------------------------------+
| Task           | Input text that represents the Description to       |
| Description    | describe the task. This is optional.            |
| (input)        |                                                     |
+----------------+-----------------------------------------------------+
| Message to     | The input text that will be displayed in a message  |
| Display        | box once the OrangeBot runs the task. This is used  |
| (input)        | for questions.                                      |
+----------------+-----------------------------------------------------+
| Choices        | The options that the user will input in the         |
| (input)        | multiple choice question set by the user. The user  |
|                | may put as many choices as they want as long as     |
|                | they use ";". For example, "A;B;C;D".               |
+----------------+-----------------------------------------------------+
| Result Mode    | The Format of the Result Generated. The user may    |
| (Dropdown      | choose to have the generated result to be in the    |
| list)          | form of:                                            |
|                |                                                     |
|                | > d\) Index                                         |
|                | >                                                   |
|                | > e\) Number                                        |
|                | >                                                   |
|                | > f\) Text                                          |
+----------------+-----------------------------------------------------+
| Gvariable to   | A Gvariable(s) created by the user. All Gvariables  |
| Save (Dropdown | created/auto generated will be in the list. The     |
| List)          | user can place more than one as long as they use    |
|                | ";". For example, "1;2;3". It must match the number |
|                | of Default Values. If there are 3 default values,   |
|                | there must be 3 Gvariables.                         |
+----------------+-----------------------------------------------------+

### Radio Button List Result as Index

#### Objective
To collect data from the user of which option (1st, 2nd
index) they prefer in the form of a multiple choice question. An Index
refers to the position in a list of options, except that an Index starts
with 0, not 1. So in an Index, 0 = 1st option, 1 = 2nd option.

Make sure to set Task 2 as Toggle Breakpoint. No need to edit the
Waiting task. Just add it to the script.

Go to Global Variable and click "Add New Global Variable".

You need to create a new Global Variable.

#### Steps
1.  Set Message to Display as "Please select your favourite letters from
    Alphabet List below."

2.  Set Choices as "A;B;C;D;E".

3.  Set Result Mode as Result as Index.

4.  Set Gvariable To Save.

All fields not seen here do not need to be filled.

After: The Bot will ask the user ask them to choose their favourite
letter.

After: Check Job Debugger and scroll down to see the results.

After: The Bot now knows that the user chose 2nd option (Index 1 means
2nd option).

### Radio Button List Result as Number

#### Objective
To collect data from the user of which option (1st, 2nd) they
prefer in the form of a multiple choice question. The Number refers to
the position in a list of options, starting with 1. So in an Index, 1 =
1st option, 2 = 2nd option.

Make sure to set Task 2 as Toggle Breakpoint. No need to edit the
Waiting task. Just add it to the script.

Go to Global Variable and click "Add New Global Variable".

You need to create a new Global Variable.

#### Steps
1.  Set Message to Display as "Please select your favourite letters from
    Alphabet List below."

2.  Set Choices as "A;B;C;D;E".

3.  Set Result Mode as Result as Number.

4.  Set Gvariable To Save.

All fields not seen here do not need to be filled.

After: The Bot will ask the user ask them to choose their favourite
letter.

After: Check Job Debugger and scroll down to see the results.

After: The Bot now knows that the user chose option Number 2.

### Radio Button List Result as Text

#### Objective
To collect data from the user of which option they prefer in
the form of a multiple choice question.

Make sure to set Task 2 as Toggle Breakpoint.

Go to Global Variable and click "Add New Global Variable".

You need to create a new Global Variable.

#### Steps
1.  Set Message to Display as "Please select your favourite letters from
    Alphabet List below."

2.  Set Choices as "A;B;C;D;E".

3.  Set Result Mode as Result as Text.

4.  Set Gvariable To Save.

All fields not seen here do not need to be filled.

After: The Bot will ask the user ask them to choose their favourite
letter.

After: Check Job Debugger and scroll down to see the results.

After: The Bot now knows that the user chose B.

### Value Entry (Dropdown List)

#### Objective
To collect data from the user of which option they prefer in
the form of a dropdown list.

#### Table Field
  ----------------- -----------------------------------------------------
  Field             Description

  Task Name         Name of the task belong to the group

  Task Description  Input text that represents the Description to
  (input)           describe the task. This is optional.

  Message to        The input text that will be displayed in a message
  Display (input)   box once the OrangeBot runs the task. This is used
                    for questions.

  Choices (input)   The options that the user will input in the multiple
                    choice question set by the user. The user may put as
                    many choices as they want as long as they use ";".
                    For example, "A;B;C;D".

  Gvariable to Save A Gvariable(s) created by the user. All Gvariables
  (Dropdown List)   created/auto generated will be in the list. The user
                    can place more than one as long as they use ";". For
                    example, "1;2;3". It must match the number of Default
                    Values. If there are 3 default values, there must be
                    3 Gvariables.
  ----------------- -----------------------------------------------------

  

Make sure to set Task 2 as Toggle Breakpoint. No need to edit the
Waiting task. Just add it to the script.

Go to Global Variable and click "Add New Global Variable".

You need to create a new Global Variable.

#### Steps
1.  Set Message to Display as "Please select your favourite letters from
    Alphabet List below."

2.  Set Choices as "A;B;C;D;E".

3.  Set Result Mode as Result as Index.

4.  Set Gvariable To Save.

All fields not seen here do not need to be filled.

After: The Bot will ask the user to choose their favourite letter. Then
click submit.

After: Check Job Debugger and scroll down to see the results.

After: The Bot now knows that the user chose B.

### Set Header & References

#### Objective
To confirm if the displayed Files in a chosen Folder in a
Message Box is accurate. The OrangeBot will display a Message asking the
user if the following files match the label used. For example, if the
Label says "Course Outline", all the files inside the folder must be
Course Outline documents, or documents related to a Course Outline.

#### Table Field
  ----------------- -----------------------------------------------------
  Field             Description

  Task Name         Name of the task belong to the group

  Task Description  Input text that represents the Description to
  (input)           describe the task. This is optional.

  Header Label      The input text that will be the labels that will be
  (input)           displayed in the Message Box when the OrangeBot runs
                    the task. For example, the user can use the label
                    "Name" for data regarding Names.

  Header Value      The input text that will be displayed next to the
  (input)           Header Label in a message box once the OrangeBot runs
                    the task. This is used for questions. For example,
                    "Is your name John Doe?"

  Reference Folder  Input text for the path of a folder. This allows the
  (input)           user to search a chosen Folder Path where the
                    OrangeBot will search all the files in a folder. A
                    folder chosen by the user for the OrangeBot to check.
  ----------------- -----------------------------------------------------

#### Steps

1.  Set Header Label.

2.  Set Header Value.

3.  Set Reference Folder.

All fields not seen here do not need to be filled.

Message Box\

1.  Set Message to Display.

All fields not seen here do not need to be filled.

After: The Bot will create a Message Box where you can view all files in
the Reference Folder and answer the question.

## Application Command

### Open Application

#### Objective
To open an application. It can be any application as long as
you can get the File Path. In this case, we will use Teamviewer as an
example.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group.

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Application    The input path that represents the File Path of an
  Name (input)   application chosen by the user. The OrangeBot will open
                 this application when it runs the task.
  -------------- --------------------------------------------------------

Search for Teamviewer in the dashboard.

Click "Open File Location".

Click Home, and click Copy Path.

#### Steps

1.  Set Application Name.

All fields not seen here do not need to be filled.

After: The Bot opens the Teamviewer application.

 

### Close Application

#### Objective
To close an application (Teamviewer). It can be any
application. In this case, we will use Teamviewer as an example.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group.

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Process Name   The input text that represents the Process Name. The
  (input)        Process Name is taken from the Task Manager to represent
                 the application the user wants to close. For example,
                 the Process Name for the Word application would be
                 "WINWORD", though it may differ base on the user PC.
  -------------- --------------------------------------------------------

Before: We need to close the Teamviewer application.

Search for Task Manager in the dashboard.

Click to open Task Manager.

Right click "Teamviewer".

Copy the highlighted Text

#### Steps

1.  Set Process Name.

All fields not seen here do not need to be filled.

After: The Bot closes the Teamviewer application.

 

### Check Application Running

#### Objective
To check whether an application (Teamviewer) is running. It
can be any application. In this case, we will use Teamviewer as an
example.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group.

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Process Name   The input text that represents the Process Name. The
  (input)        Process Name is taken from the Task Manager to represent
                 the application the user wants to close. For example,
                 the Process Name for the Word application would be
                 "WINWORD", though it may differ base on the user PC.

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------

Before: We need to check if the Bot can check whether Teamviewer is
running

Search for Task Manager in the dashboard.

Click to open Task Manager.

Click Teamviewer and take note of the name "Teamviewer".

Right click "Teamviewer".

Copy the highlighted Text.

You need to create a new Global Variable.

#### Steps

1.  Set Process Name.

2.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: The Bot detects that it is true that the Teamviewer
Application is running.

 

### Switch Application

#### Objective
To switch to another application (Notepad) while on another
application (Teamviewer). It can be any application. In this case, we
will use Teamviewer and Notepad as an example.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group.

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Process Name   The input text that represents the Process Name. The
  (input)        Process Name is taken from the Task Manager to represent
                 the application the user wants to close. For example,
                 the Process Name for the Word application would be
                 "WINWORD", though it may differ base on the user PC.

  Application    The input text that represents the Application
  Title (input)  Title.The Application Title is taken from the Task
                 Manager to represent the specific file the user wants to
                 close. It usually correlates to the name of the File.
  -------------- --------------------------------------------------------

Before: Teamviewer is open.

Before: Note pad is also open. We need the Bot to switch to Notepad.

Search for Task Manager in the dashboard.

Click to open Task Manager.

Click Notepad and take note of the name "Untitled - Notepad".

You need to create a new Global Variable.

#### Steps

1.  Set Process Name.

2.  Set Application Title.

All fields not seen here do not need to be filled.

After: The Bot switched to Notepad.

### Maximize Window

#### Objective
To maximize an application (Teamviewer) to full screen. It
can be any application. In this case, we will use Teamviewer as an
example.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group.                  |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target      | This dropdown list allows the user to maximize the     |
| Window      |                                                        |
| (Dropdown   | a)  Default Window (Recommended)                       |
| List)       |                                                        |
|             | b)  Foreground Window                                  |
+-------------+--------------------------------------------------------+

Before: Teamviewer is in small screen.

#### Steps

1.  Set Target Window as Default.

All fields not seen here do not need to be filled.

After: The Bot maximizes Teamviewer to full screen.

 

### Minimize Window

#### Objective
To minimize an application (Teamviewer) to full screen. It
can be any application. In this case, we will use Teamviewer as an
example.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group.                  |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target      | This dropdown list allows the user to minimize the     |
| Window      |                                                        |
| (Dropdown   | c)  Default Window (Recommended)                       |
| List)       |                                                        |
|             | d)  Foreground Window                                  |
+-------------+--------------------------------------------------------+

Before: Teamviewer is in full screen.

#### Steps

1.  Set Target Window as Default.

All fields not seen here do not need to be filled.

After: The Bot minimizes Teamviewer to a small screen.

 

### Connect Remote Desktop

#### Objective
To connect to another PC using Remote Desktop.

Remote Desktop must be enabled on the PC.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group.                  |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Remote      | Input text that represents the IP address of the       |
| Computer    | remote PC (the PC the user wants to connect to).       |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| User Name   | Input text that represents the username for the remote |
| (input)     | PC.                                                    |
+-------------+--------------------------------------------------------+
| Password    | Input text that represents the password for the remote |
| (input)     | PC.                                                    |
+-------------+--------------------------------------------------------+
| Resolution  | Input text that represents the screen resolution of    |
| (input)     | the remote PC. This is chosen by the user.             |
+-------------+--------------------------------------------------------+
| View Mode   | How the Connect Desktop will appear on screen. There   |
| (Dropdown   | are 3 options:                                         |
| List)       |                                                        |
|             | a)  Original - The "Connect Remote Desktop" display    |
|             |     will appear in the same size as the original       |
|             |     remote PC.                                         |
|             |                                                        |
|             | b)  Shrink - The "Connect Remote Desktop" display will |
|             |     shrink to match the size of the window on the user |
|             |     PC (if the display is minimized, it will shrink).  |
|             |                                                        |
|             | c)  Stretch - The "Connect Remote Desktop" display     |
|             |     will shrink to match the size of the window on the |
|             |     user PC (if the display is maximized to full       |
|             |     screen, it will stretch to full screen).           |
+-------------+--------------------------------------------------------+

First, you need to get the IP address for the remote PC (not your own
PC):

1)  Click the Start button.

2)  Type cmd in the Search bar.

3)  Type ipconfig/all in the black and white window and press enter.

4)  Your IP address will be the IPv4 address.

#### Steps

1.  Set Remote Computer (IP Address for the remote PC)

2.  Set Username (for Remote PC).

3.  Set Password (for Remote PC).

4.  Set Resolution

5.  Set View Mode (chosen by user).

Original means normal screen size, Shrink means the remote PC screen
will shrink to fit your PC, and Stretch means full screen mode.

All fields not seen here do not need to be filled.

After: The Bot remote connects to another PC.

 

### Disconnect Remote Desktop​

#### Objective
To disconnect a Remote Desktop connection.

Remote Desktop must be enabled on the PC.
#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group.

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        
  -------------- --------------------------------------------------------

First, create this script:

#### Steps

Connect Remote Desktop
1.  Set Remote Computer (IP Address for the remote PC)

2.  Set Username (for Remote PC).

3.  Set Password (for Remote PC).

4.  Set Resolution

5.  Set View Mode (chosen by user).

Original means normal screen size, Shrink means the remote PC screen
will shrink to fit your PC, and Stretch means full screen mode.

All fields not seen here do not need to be filled.

Disconnect Remote Desktop
1.  Set Task Order & Description.

All fields not seen here do not need to be filled.

## Authentication Command

### Key in Password

#### Objective
For the Bot to type out a password without inserting the
password in the script. The OrangeBot will retrieve the password from
Authentication Configuration.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group.

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Application    The input text that represents the Application Name.
  Name (input)   The Application Name refers to the chosen input Name
                 used when configuring Authentication Configuration. The
                 OrangeBot will extract the password from Authentication
                 Configuration with this Application Name. Leave blank if
                 not needed.

  User ID/Name   The input text that represents the User ID.The User
  (input)        ID refers to the input chosen user ID used when
                 configuring Authentication Configuration. The username
                 for the application/website is what the user would
                 usually choose. The OrangeBot will extract the password
                 from Authentication Configuration with this User
                 ID/Name. For example, if it is a website, it will use
                 the website username as the User ID.
  -------------- --------------------------------------------------------

Click Maintenance, and then click Authentication Configuration.

Click New.

1.  Set the Application Name as "Demo".

2.  Set User ID as "userID".

3.  Set Password as "password".

#### Steps

1.  Set Application Name (same as set in Authentication Configuration).

2.  Set User ID (same as set in Authentication Configuration).

All fields not seen here do not need to be filled.

After: The Bot keys in the password without inserting the password in
the script.

### Key in Password (Key Press)

#### Objective
For the Bot to type out a password without inserting the
password in the script. The OrangeBot will retrieve the password from
Authentication Configuration.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group.

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Application    The input text that represents the Application Name.
  Name (input)   The Application Name refers to the chosen input Name
                 used when configuring Authentication Configuration. The
                 OrangeBot will extract the password from Authentication
                 Configuration with this Application Name. Leave blank if
                 not needed.

  User ID/Name   The input text that represents the User ID.The User
  (input)        ID refers to the input chosen user ID used when
                 configuring Authentication Configuration. The username
                 for the application/website is what the user would
                 usually choose. The OrangeBot will extract the password
                 from Authentication Configuration with this User
                 ID/Name. For example, if it is a website, it will use
                 the website username as the User ID.
  -------------- --------------------------------------------------------

Click Maintenance, and then click Authentication Configuration.

Click New.

4.  Set the Application Name as "Demo".

5.  Set User ID as "userID".

6.  Set Password as "password".

#### Steps

3.  Set Application Name (same as set in Authentication Configuration).

4.  Set User ID (same as set in Authentication Configuration).

All fields not seen here do not need to be filled.

After: The Bot keys in the password without inserting the password in
the script.

### Generate New Password

#### Objective
For the Bot to generate a random password.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group.                  |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Application | The input text that represents the Application       |
| Name        | Name. The Application Name refers to the chosen      |
| (input)     | input Name used when configuring Authentication        |
|             | Configuration. The OrangeBot will extract the password |
|             | from Authentication Configuration with this            |
|             | Application Name. Leave blank if not needed.           |
+-------------+--------------------------------------------------------+
| User        | The input text that represents the User ID.The     |
| ID/Name     | User ID refers to the input chosen user ID used when   |
| (input)     | configuring Authentication Configuration. The username |
|             | for the application/website is what the user would     |
|             | usually choose. The OrangeBot will extract the         |
|             | password from Authentication Configuration with this   |
|             | User ID/Name. For example, if it is a website, it will |
|             | use the website username as the User ID.               |
+-------------+--------------------------------------------------------+
| New         | The input text that represents the number of           |
| Password    | characters of the generated password. For example, if  |
| Length      | the user sets it as 10, the random password will have  |
| (input)     | 10 characters.                                         |
+-------------+--------------------------------------------------------+
| Include     | The input text that represents Y or N.         |
| Upper Case  |                                                        |
| Characters  | Allows the user to choose if the generated password    |
| (N = No)    | includes upper case characters (A, B, C, etc.)\        |
| (input)     | Set Y for Yes.                                         |
|             |                                                        |
|             | Set N for No.                                          |
+-------------+--------------------------------------------------------+
| Include     | Allows the user to choose if the generated password    |
| LowerCase   | includes lower case characters (a, b, c, etc.)\        |
| Characters  | Set Y for Yes.                                         |
| (N = No)    |                                                        |
| (input)     | Set N for No.                                          |
+-------------+--------------------------------------------------------+
| Include     | The input text that represents Y or N.         |
| Numeric     |                                                        |
| Digit (N =  | Allows the user to choose if the generated password    |
| No) (input) | includes numbers (1, 2, 3, etc.)\                      |
|             | Set Y for Yes.                                         |
|             |                                                        |
|             | Set N for No.                                          |
+-------------+--------------------------------------------------------+
| Include     | The input text that represents Y or N.         |
| Character   |                                                        |
| Symbol (N = | Allows the user to choose if the generated password    |
| No) (input) | includes special characters (&, !, (, etc.)\           |
|             | Set Y for Yes.                                         |
|             |                                                        |
|             | Set N for No.                                          |
+-------------+--------------------------------------------------------+

Click Maintenance, and then click Authentication Configuration.

Click New.

7.  Set the Application Name as "Demo".

8.  Set User ID as "userID".

9.  Set Password as "password".

Make sure to set Task 2 as Toggle Breakpoint.

#### Steps

1.  Set New Password Length as 10.

2.  Set Include Upper Case Characters (N = No) as Y.

3.  Set Include Lower Case Characters (N = No) as Y.

4.  Set Include Numeric Digit (N = No) as Y.

5.  Set Include Character Symbol (N = No) as Y.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot generates a new password.

## Control Structure Command

### Compare String

#### Objective
To compare two values.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Message to  | The input text that will be displayed in a message box |
| Display     | once the OrangeBot runs the task. This is used for     |
| (input)     | questions.                                             |
+-------------+--------------------------------------------------------+
| Value       | The first value chosen by the user. (E.g. Sample Text) |
| Source      |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Value/Regex | The second value chosen by the user. (E.g. Sample).    |
| to Compare  | For a Regex, it will be the Regex format chosen by the |
| (input)     | user.                                                  |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+
| Compare     | The type of comparison chosen by the user. This        |
| Mode        | dropdown list includes:                                |
| (Dropdown   |                                                        |
| List)       | a)  Full Compare - Check if both values match 100%     |
|             |                                                        |
|             | b)  Partial Compare - Check if both values match 100%  |
|             |     before a chosen key word in either the Value       |
|             |     Source or Value to Compare.                        |
|             |                                                        |
|             | c)  Contains - Check if a keyword in the Value to      |
|             |     Compare is in the value source (e.g. is the        |
|             |     keyword "Sample" in the text "Sample Text".)       |
|             |                                                        |
|             | d)  Regex Match - Checks if the Value to Compare       |
|             |     follows a regex format chosen by the user.         |
|             |                                                        |
|             | e)  Similarity - Checks if both values have at least a |
|             |     certain percentages of similarity (e.g. 0.8 for    |
|             |     80% similar)                                       |
+-------------+--------------------------------------------------------+
| Case        | The default setting recommended is No.             |
| Sensitive   |                                                        |
|             | This allows the user to choose if the comparison needs |
|             | to take into account whether the uppercase or          |
|             | lowercase letters match.                               |
|             |                                                        |
|             | For example, if the user sets Case Sensitive as        |
|             | Yes:                                               |
|             |                                                        |
|             | Value Source: Mode                                 |
|             |                                                        |
|             | Value to Compare: mode                             |
|             |                                                        |
|             | The result of the comparison will be N (No). The   |
|             | capital "M" does not match.                        |
|             |                                                        |
|             | But if the user sets Case Sensitive as No.         |
|             |                                                        |
|             | Value Source: Mode                                 |
|             |                                                        |
|             | Value to Compare: mode                             |
|             |                                                        |
|             | The result of the comparison will be Y(Yes). It    |
|             | will not matter if the capital "M" does not match, |
|             | as long as the words remain the same.                  |
+-------------+--------------------------------------------------------+
| Filtering   | This allows the user to not include certain characters |
| (input)     | in a comparison. For example, if the user does not     |
|             | want to include "-", then the user can set it to       |
|             | filter out "-"                                         |
+-------------+--------------------------------------------------------+
| Source end  | This only applies to Partial Compare. This will    |
| at (input)  | check if both values match 100% before a chosen    |
|             | input keyword in the Value Source.                 |
|             |                                                        |
|             | For example, if the user sets "-" as the key word:     |
|             |                                                        |
|             | Value Source: Mode - Sample                    |
|             |                                                        |
|             | Value to Compare: Mode                             |
|             |                                                        |
|             | The result of the comparison will be Y (Yes). Both |
|             | match before the key word "-".                         |
+-------------+--------------------------------------------------------+
| Value end   | This only applies to Partial Compare. This will    |
| at (input)  | check if both values match 100% before a chosen    |
|             | input keyword in the Value to Compare.             |
|             |                                                        |
|             | For example, if the user sets "-" as the key word:     |
|             |                                                        |
|             | Value Source: Mode                                 |
|             |                                                        |
|             | Value to Compare: Mode - Sample                |
|             |                                                        |
|             | The result of the comparison will be Y (Yes). Both |
|             | match before the key word "-".                         |
+-------------+--------------------------------------------------------+

### Full Compare

#### Objective
To compare if two values (Sample & Testing) are the same.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

#### Steps

1.  Set Value Source as "Sample".

2.  Set Value to Compare as "Testing".

3.  Set Gvariable to Save as \@YesOrNo@.

4.  Set Compare Mode as Full Compare.

5.  Set Case Sentitive as Yes (Up to you).

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that No(N), the two values
are not the same.

 

### Partial Compare

#### Objective
To compare if two values(Mode -- Sample & Mode -- Testing)
are partially the same.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

#### Steps

1.  Set Value Source as "Mode -- Sample".

2.  Set Value to Compare as "Mode -- Testing".

3.  Set Gvariable to Save as \@YesOrNo@.

4.  Set Compare Mode as Partial Compare Compare.

5.  Set Case Sentitive as Yes (Up to you).

6.  Set Source End At as "-".

7.  Set Value End At as "-".

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that Yes (Y), the two values
before "-" are the same.

 

### Contains

#### Objective
To compare if a value (Mode -- Sample) contains another value
(Mode).

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

#### Steps

1.  Set Value Source as "Mode -- Sample".

2.  Set Value to Compare as "Mode".

3.  Set Gvariable to Save as \@YesOrNo@.

4.  Set Compare Mode as Contains.

5.  Set Case Sentitive as Yes (Up to you).

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that Yes (Y), "Mode" is
contained within "Mode -- Sample".

 

### Similarity

#### Objective
To compare if a value (Mode -- Sample) is similar to another
value (Mode -- Testing).

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

#### Steps

1.  Set Value Source as "Mode -- Sample".

2.  Set Value to Compare as "Mode".

3.  Set Gvariable to Save as \@YesOrNo@.

4.  Set Compare Mode as Contains.

5.  Set Case Sentitive as Yes (Up to you).

6.  Set Similarity Threshold as 0.4 (40%).

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that Yes (Y), the two values
are 40% similar.

### Compare Number

#### Objective
To compare two numbers.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Value       | The first number chosen by the user. (E.g. 123)        |
| Source      |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Value to    | The second value chosen by the user. (E.g. 234).       |
| Compare     |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Condition   | The type of comparison chosen by the user. This        |
| (Dropdown   | dropdown list includes:                                |
| List)       |                                                        |
|             | a)  Equals (=) - Check if both numbers match 100%.     |
|             |                                                        |
|             | b)  Not Equals (\<\>) - Check if both numbers do not   |
|             |     match.                                             |
|             |                                                        |
|             | c)  More Than (\>) - Check if the Value Source is      |
|             |     larger than the Value to Compare.                  |
|             |                                                        |
|             | d)  Less Than (\<) - Check if the Value Source is      |
|             |     smaller than the Value to Compare.                 |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### Number Equals (=)

#### Objective
To compare if two numbers (123 & 234) are the same.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

#### Steps

1.  Set Value Source as "123".

2.  Set Value to Compare as "234".

3.  Set Condition as =.

4.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that No(N), the two values
are not the same.

 

### Number Not Equals (\<\>)

#### Objective
To compare if one number (123) is not equals to another
number (234).

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

#### Steps

1.  Set Value Source as "123".

2.  Set Value to Compare as "234".

3.  Set Condition as \<\>.

4.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that Yes (Y), the two values
are not the same.

 

### Number More Than (\>)

#### Objective
To compare if one number (123) is more than another number
(234).

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

#### Steps

1.  Set Value Source as "123".

2.  Set Value to Compare as "234".

3.  Set Condition as \>.

4.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that No(N), 123 is not more
than 234.

 

### Number Less Than (\<)

#### Objective
To compare if one number (123) is less than another number
(234).

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

#### Steps

1.  Set Value Source as "123".

2.  Set Value to Compare as "234".

3.  Set Condition as \<.

4.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that Yes(Y), 123 is less than
234.

 

 

### If Else Statement

#### Objective
To compare the value of two Global Variables.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Gvariable 1 | The first number chosen by the user that is saved in a |
| (Dropdown   | global variable. (E.g. 123 saved in \@Variable1@). All |
| List)       | Gvariables created/auto generated will be in the list. |
+-------------+--------------------------------------------------------+
| Gvariable 2 | The second number chosen by the user that is saved in  |
| (Dropdown   | a global variable. (E.g. 234 saved in \@Variable2@).   |
| List)       | All Gvariables created/auto generated will be in the   |
|             | list.                                                  |
+-------------+--------------------------------------------------------+
| Condition   | The type of comparison chosen by the user. This        |
| (Dropdown   | Dropdown List includes:                                |
| List)       |                                                        |
|             | a)  Equals (=) - Check if both numbers match 100%.     |
|             |                                                        |
|             | b)  Not Equals (\<\>) - Check if both numbers do not   |
|             |     match.                                             |
|             |                                                        |
|             | c)  More Than (\>) - Check if the Gvariable 1 is       |
|             |     larger than the Gvariable 2.                       |
|             |                                                        |
|             | d)  Less Than (\<) - Check if the Gvariable 1 is       |
|             |     smaller than the Gvariable 2.                      |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### If Else Equals (=)

#### Objective
To compare if two Global Variables (3 & 4) are the same.

First, create this script:Make sure to set Task 2 as Toggle
Breakpoint.

Go to Global Variable.

Click Add New Global Variable to Create Variable1, then click Save.

Click Add New Global Variable to Create Variable2, then click Save.

#### Steps

1.  Set Gvariable 1.

2.  Set Gvariable 2.

3.  Set Condition as =.

4.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that No(N), the two variables
are not the same.

 

### If Else Not Equals (\<\>)

#### Objective
To compare if one Variable (3) is not equal to another
Variable (4).

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Go to Global Variable.

Click Add New Global Variable to Create Variable1, then click Save.

Click Add New Global Variable to Create Variable2, then click Save.

#### Steps

1.  Set Gvariable 1.

2.  Set Gvariable 2.

3.  Set Condition as \<\>.

4.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that Yes(Y), 3 does not equal
to 4.

 

### If Else More Than (\>)

#### Objective
To compare if one Variable (3) is more than another Variable
(4).

First, create this script:Make sure to set the last task as Toggle
Breakpoint. No need to edit the Waiting task. Just add it to the
script.

Go to Global Variable.

Click Add New Global Variable to Create Variable1, then click Save.

Click Add New Global Variable to Create Variable2, then click Save.

#### Steps

1.  Set Gvariable 1.

2.  Set Gvariable 2.

3.  Set Condition as \>.

4.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that No(N), 3 is not more
than 4.

 

### If Else Less Than (\<)

#### Objective
To compare if one Variable (3) is less than another Variable
(4).

First, create this script:Make sure to set Task 2 as Toggle
Breakpoint.

Go to Global Variable.

Click Add New Global Variable to Create Variable1, then click Save.

Click Add New Global Variable to Create Variable2, then click Save.

#### Steps

1.  Set Gvariable 1.

2.  Set Gvariable 2.

3.  Set Condition as \<.

4.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that Yes(Y), 3 is less than
4.

 

### And Or Statement

#### Objective
To check if:

-   Two statements are true.

-   Two statements are false.

-   One statement is true and one statement is false.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Mode 1      | This allows the user to use Compare String or Compare  |
| (Dropdown   | Number:                                                |
| List)       |                                                        |
|             | a)  String - Same features as Compare String (Full     |
|             |     Compare, Contains, etc.).                          |
|             |                                                        |
|             | b)  Number - Same features as Compare Number           |
|             |     (=,\<\>,\>,\<, etc.).                              |
+-------------+--------------------------------------------------------+
| Source      | Input Text that represents the first value/number      |
| Value 1     | chosen by the user. (E.g. 1)                           |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target      | Input Text that represents the second value/number     |
| Value 1     | chosen by the user. (E.g. 2).                          |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Operator 1  | The type of comparison chosen by the user. For String, |
| (Dropdown   | this dropdown list includes:                           |
| List)       |                                                        |
|             | a)  Full Compare - Check if both values match 100%     |
|             |                                                        |
|             | b)  Contains - Check if a keyword in the Value to      |
|             |     Compare is in the value source (e.g. is the        |
|             |     keyword "Sample" in the text "Sample Text".)       |
|             |                                                        |
|             | For Number, this dropdown list includes:               |
|             |                                                        |
|             | a)  Equals (=) - Check if both numbers match 100%.     |
|             |                                                        |
|             | b)  Not Equals (\<\>) - Check if both numbers do not   |
|             |     match.                                             |
|             |                                                        |
|             | c)  More Than (\>) - Check if the Source Value 1 is    |
|             |     larger than the Target Value 1.                    |
|             |                                                        |
|             | d)  Less Than (\<) - Check if the Source Value 1 is    |
|             |     smaller than the Target Value 1.                   |
+-------------+--------------------------------------------------------+
| Criteria    | This allows the user to set a Criteria of:             |
| (Dropdown   |                                                        |
| List)       | a)  And - If Both statements are true, the Result will |
|             |     be Y (Yes). if only one statement is true, or  |
|             |     both are false, the Result will be N (No).     |
|             |                                                        |
|             | b)  Or - If at least one statement is true, the Result |
|             |     will be Y (Yes). if both are false, the Result |
|             |     will be N (No).                                |
+-------------+--------------------------------------------------------+
| Mode 2      | This Dropdown List allows the user to use Compare      |
| (Dropdown   | String or Compare Number:                              |
| List)       |                                                        |
|             | a)  String - Same features as Compare String (Full     |
|             |     Compare, Contains, etc.).                          |
|             |                                                        |
|             | b)  Number - Same features as Compare Number           |
|             |     (=,\<\>,\>,\<, etc.).                              |
+-------------+--------------------------------------------------------+
| Source      | Input Text that represents the first value/number      |
| Value 2     | chosen by the user. (E.g. abc)                         |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target      | Input Text that represents the second value/number     |
| Value 2     | chosen by the user. (E.g. bcd).                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Operator 2  | The type of comparison chosen by the user. For String, |
| (Dropdown   | this includes:                                         |
| List)       |                                                        |
|             | c)  Full Compare - Check if both values match 100%     |
|             |                                                        |
|             | d)  Contains - Check if a keyword in the Value to      |
|             |     Compare is in the value source (e.g. is the        |
|             |     keyword "Sample" in the text "Sample Text".)       |
|             |                                                        |
|             | For Number, this includes:                             |
|             |                                                        |
|             | e)  Equals (=) - Check if both numbers match 100%.     |
|             |                                                        |
|             | f)  Not Equals (\<\>) - Check if both numbers do not   |
|             |     match.                                             |
|             |                                                        |
|             | g)  More Than (\>) - Check if the Source Value 2 is    |
|             |     larger than the Target Value 2.                    |
|             |                                                        |
|             | h)  Less Than (\<) - Check if the Source Value 2 is    |
|             |     smaller than the Target Value 2.                   |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "N", it will save the result in the Gvariable, so   |
|             | as a result, "N" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### And

#### Objective
To check if two statements are true at the same time.

First, create this script:Make sure to set Task 2 as Toggle
Breakpoint.

#### Steps

1.  Set Mode 1 as Number.

2.  Set Source Value 1 as 1.

3.  Set Target Value 1 as 2.

4.  Set Operator 1 as \>.

5.  Set Criteria as And.

6.  Set Mode 2 as String (refers to Text and/or Numbers).

7.  Set Source Value 2 as abc.

8.  Set Target Value 2 as abc.

9.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that No(N), the two
statements are not true.

 

### Or

#### Objective
To check if only one out of two statements are true.

First, create this script:Make sure to set Task 2 as Toggle
Breakpoint.

#### Steps

1.  Set Mode 1 as Number.

2.  Set Source Value 1 as 1.

3.  Set Target Value 1 as 2.

4.  Set Operator 1 as \>.

5.  Set Criteria as Or.

6.  Set Mode 2 as String (refers to Text and/or Numbers).

7.  Set Source Value 2 as abc.

8.  Set Target Value 2 as abc.

9.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that Yes(YN), at least one of
the two statements are true.

### Compare Date

#### Objective
To compare two dates.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
|             |                                                        |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Value       | The first number chosen by the user. (E.g. 23/11/2023) |
| Source      |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Value to    | The second value chosen by the user. (E.g.             |
| Compare     | 12/03/2023).                                           |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Condition   | The type of comparison chosen by the user. This        |
|             | includes:                                              |
|             |                                                        |
|             | e)  Equals (=) - Check if both numbers match 100%.     |
|             |                                                        |
|             | f)  Not Equals (\<\>) - Check if both numbers do not   |
|             |     match.                                             |
|             |                                                        |
|             | g)  More Than (\>) - Check if the Value Source is      |
|             |     after the Value to Compare.                        |
|             |                                                        |
|             | h)  Less Than (\<) - Check if the Value Source is      |
|             |     before the Value to Compare.                       |
+-------------+--------------------------------------------------------+
| Format      | The date format chosen by the user. The user may use   |
| (input)     | the following formats:                                 |
|             |                                                        |
|             | a)  yyyyMMdd - 20251108                                |
|             |                                                        |
|             | b)  dd-MM-yyyy - 08-11-2025                            |
|             |                                                        |
|             | c)  dd/MM/yyyy - 08/11/2025                            |
|             |                                                        |
|             | d)  dd - 08                                            |
|             |                                                        |
|             | e)  MM - 11                                            |
|             |                                                        |
|             | f)  MMM - Nov                                          |
|             |                                                        |
|             | g)  MMMM - November                                    |
|             |                                                        |
|             | h)  yyyy - 2025                                        |
|             |                                                        |
|             | i)  yy - 25                                            |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### Date Equals (=)

#### Objective
To compare if two dates (23rd March 2022 & 7th May 2022) are
the same.

First, create this script:Make sure to set Task 2 as Toggle
Breakpoint.

#### Steps

1.  Set Value Source as "20220323".

2.  Set Value to Compare as "20220507".

3.  Set Condition as =.

4.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that No(N), the two dates are
not the same.

 

### Date After (\>)

#### Objective
To compare if a date (23rd March 2022) is after another date
(7th May 2022).

First, create this script:Make sure to set Task 2 as Toggle
Breakpoint.

#### Steps

1.  Set Value Source as "20220323".

2.  Set Value to Compare as "20220507".

3.  Set Condition as \>.

4.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that No(N), the 23rd of March
is not after the 7th of May.

 

### Date Before (\<)

#### Objective
To compare if a dates (23rd March 2022) is before another
date (7th May 2022).

First, create this script:Make sure to set Task 2 as Toggle
Breakpoint.

#### Steps

1.  Set Value Source as "20220323".

2.  Set Value to Compare as "20220507".

3.  Set Condition as \<.

4.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the Bot has found that Yes(Y), the 23rd of
March is before the 7th of May.


## Email Command

### Search Unread Email

#### Objective
To search an unread email.

#### Table Field
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe the task. This is optional.
  Description    
  (input)        

  Email Name     Input text that represents the name of the Email set by the user in [[Gateway Configuration
  (input)        (Email)]{.underline}](https://help.orangefinasia.com/docs/8-orangeworkforce-control-centre/maintenance/gateway-configuration-email/).

  Subject        Input text that represents the subject of the Email for the OrangeBot to search. It does not have to be the entire subject. For example,
  (input)        if the subject of the Email is "Customer Response #186", the user can just set the subject as "Customer Response" and the Bot will find
                 the email.
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: This email is unread.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

#### Steps

1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: The OrangeBot can find the unread email.

 

### Create Email

#### Objective
To create and send an email with an attachment.

#### Table Field
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe the task. This is optional.
  Description    
  (input)        

  Email Name     Input text that represents the name of the Email set by the user in [[Gateway Configuration
  (input)        (Email)]{.underline}](https://help.orangefinasia.com/docs/8-orangeworkforce-control-centre/maintenance/gateway-configuration-email/).

  To (input)     Input text that represents the email address of the Receiver who will receive the created email.

  Cc (input)     Input text that represents the Cc. Cc refers to people who will receive the email but are not the main receivers. The email address of
                 the people who will be cced in the email. There can be more than one email as long as ";" is used (e.g.
                 sample1@gmail.com;sample2@gmail.com;sample3@gmail.com)

  Bcc (input)    Input text that represents the Bcc. Bcc refers to people who will receive the email but will be hidden for security reasons. The email
                 address of the people who will be bcced in the email. There can be more than one email as long as ";" is used (e.g.
                 sample1@gmail.com;sample2@gmail.com;sample3@gmail.com)

  Subject        Input text that represents the subject of the created Email. This will be set by the user.
  (input)        

  Body (input)   Input text that represents the body of the created Email chosen by the user. This will be set by the user.

  Attachment     Input text that represents the File Path of the files that the user would want to attach to the created email. There can be more than one
  (input)        as long as ";" is used (e.g. C:\\Users\\InsiteMY\\Downloads\\sample1.pdf;\"C:\\Users\\InsiteMY\\Downloads\\Untitled.png\"\\)
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

This is the file we need to attach to the email.

#### Steps

1.  Set Email Name (Get from Gateway Configuration)

2.  Set To as the email for the recipient

3.  Set Subject

4.  Set Body

5.  Set Attachment as the file path for the PDF (optional)

All fields not seen here do not need to be filled.

After: The Bot sends an email with the attachment.

 

### Download Email

You need to get the email using Search Unread Email.

#### Objective
To download an Email.

#### Table Field
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe the task. This is optional.
  Description    
  (input)        

  Email Name     Input text that represents the name of the Email set by the user in [[Gateway Configuration
  (input)        (Email)]{.underline}](https://help.orangefinasia.com/docs/8-orangeworkforce-control-centre/maintenance/gateway-configuration-email/).

  Email ID       Do not edit this. This is auto generated by the OrangeBot from Search Unread Email. The user must create a Search Unread Email
  (input)        before using this.

  Save Path      Input text that represents the path of a Folder chosen by the user where the OrangeBot will download the email.
  (input)        
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------

First, create this script:

Before: This email is unread.

Before: The folder is empty.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Download Email
1.  Set Email Name (Get from Gateway Configuration

2.  Set Save Path as the folder path where the email will be downloaded

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot downloaded the email and named it
after the current Date, Time and Seconds.

 

### Save Email Attachment

You need to get the email using Search Unread Email.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Email Name  | Input text that represents the name of the Email set   |
| (input)     | by the user in [[Gateway Configuration               |
|             | (Email)]{.underline}](htt                            |
|             | ps://help.orangefinasia.com/docs/8-orangeworkforce-con |
|             | trol-centre/maintenance/gateway-configuration-email/). |
+-------------+--------------------------------------------------------+
| Email ID    | Do not edit this. This is auto generated by the    |
| (input)     | OrangeBot from Search Unread Email. The user must  |
|             | create a Search Unread Email before using this.        |
+-------------+--------------------------------------------------------+
| File        | Input text that represents the file extension of the   |
| Extension   | file that needs to be downloaded. (e.g. ".xlsx" for    |
| (input)     | Excel, ".docx" for Word, etc.)                         |
|             |                                                        |
|             | You can get the file extensions by referring to this   |
|             | list (click                                            |
|             | [here](https://suppo                                   |
|             | rt.microsoft.com/en-us/windows/common-file-name-extens |
|             | ions-in-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01)) |
+-------------+--------------------------------------------------------+
| Save Path   | Input text that represents the path of a Folder chosen |
| (input)     | by the user where the OrangeBot will download the      |
|             | email.                                                 |
+-------------+--------------------------------------------------------+

First, create this script:

#### Objective
To download an email attachment from an unread email.

Before: We need to download the PDF from the unread email.

The folder is empty.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Save Email Attachment
1.  Set Email Name (Get from Gateway Configuration)

2.  Set File Extension as ".pdf" (depends on the attachment)

3.  Set Save Path as the folder path where the email will be downloaded
    (put a "/" at the end).

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot downloaded the attachment.

 

### Get Email Info

#### Objective
To extract the info regarding an unread email.

#### Table Field
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe the task. This is optional.
  Description    
  (input)        

  Email Name     Input text that represents the name of the Email set by the user in [[Gateway Configuration
  (input)        (Email)]{.underline}](https://help.orangefinasia.com/docs/8-orangeworkforce-control-centre/maintenance/gateway-configuration-email/).

  Email ID       Do not edit this. This is auto generated by the OrangeBot from Search Unread Email. The user must create a Search Unread Email
  (input)        before using this.

  Field Name     Input text that represents the info that the OrangeBot will extract from the Email.
  (input)        

  Save Path      Input text that represents the path of a Folder chosen by the user where the OrangeBot will download the email.
  (input)        

  Gvariable to   The OrangeBot will save the Result in a Gvariable created by the user. All Gvariables created/auto generated will be in the list. For
  Save (Dropdown example, if the user uses a Gvariable called "@Text@" and the Result is "1", it will save the result in the Gvariable, so as a result,
  List)          "1" will be saved as the value of "\@Text@".
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------

### Bcc

You need to get the email using Search Unread Email

#### Objective
To get the Bcc email from an unread email.

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Bcc information from this unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Info
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Bcc

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Bcc email
information.

### Cc

You need to get the email using Search Unread Email.

#### Objective
To get the Cc email from an unread email.

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Bcc information from this unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
3.  Set Email Name (Get from Gateway Configuration)

4.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Info
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Cc

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Cc email
information.

### Content HTML

You need to get the email using Search Unread Email.

#### Objective
To get the Content Html information from an unread email.

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread
email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Info
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Content Html

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

0After: Result shows that the OrangeBot has saved the Content Html email
information.

 

### Content Text

You need to get the email using Search Unread Email.
#### Objective
To get the Content Text from an unread email.

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread
email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Info
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Content Text

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Content Text email
information.

 

### Sender

You need to get the email using Search Unread Email.

#### Objective
To get the Sender email from an unread email.

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread
email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Info
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Sender

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Sender email
information.

 

### Sender Name

You need to get the email using Search Unread Email.

#### Objective
To get the Sender Name from an unread email.

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread
email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Info
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Sender Name

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Sender Name
information.

 

### Sent Date

You need to get the email using Search Unread Email.
#### Objective
To get the Sent Date from an unread email.

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread
email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Info
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Sent Date

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved when and what time the
email was sent.

 

### Subject

You need to get the email using Search Unread Email.

#### Objective
To get the Subject from an unread email.

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread
email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Info
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Subject

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Subject
information.

 

### Recipient

You need to get the email using Search Unread Email.
#### Objective
To get the Recipient information from an unread email.

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread
email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
5.  Set Email Name (Get from Gateway Configuration)

6.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Info
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Recipient

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results..

After: Result shows that the OrangeBot has saved the Recipient
information.

 

### Received Date

You need to get the email using Search Unread Email.

#### Objective
To get the Received Date information from an unread email.

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread
email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Info
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Received Date

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Received Date
information.

 

### Get Email Table

You need to get the email using Search Unread Email.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Email Name  | Input text that represents the name of the Email set   |
| (input)     | by the user in [[Gateway Configuration               |
|             | (Email)]{.underline}](htt                            |
|             | ps://help.orangefinasia.com/docs/8-orangeworkforce-con |
|             | trol-centre/maintenance/gateway-configuration-email/). |
+-------------+--------------------------------------------------------+
| Email ID    | Do not edit this. This is auto generated by the    |
| (input)     | OrangeBot from Search Unread Email. The user must  |
|             | create a Search Unread Email before using this.        |
+-------------+--------------------------------------------------------+
| Result      | Input text that represents Yes or No.                  |
| Ignore      |                                                        |
| Header      | This allows the user to not include the Table Header   |
| (input)     | in the Result if it is set as Yes. If not, set it  |
|             | as No.                                             |
+-------------+--------------------------------------------------------+
| Result      | Input text that represents Y or N.                     |
| Ignore      |                                                        |
| Footer      | Footer refers to text below the table. If there is     |
| (input)     | more text below the table, set it as Yes. If not,  |
|             | set it as No.                                      |
+-------------+--------------------------------------------------------+

#### Objective
To get a table from an unread email.

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the table from the unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Table
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Result Ignore Header as No

3.  Set Result Ignore Footer as No

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the email table
information.

 

### Get Email Form

You need to get the email using Search Unread Email.

#### Objective
To get a Form from an unread email.

#### Table Field
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe the task. This is optional.
  Description    
  (input)        

  Email Name     Input text that represents the name of the Email set by the user in [[Gateway Configuration
  (input)        (Email)]{.underline}](https://help.orangefinasia.com/docs/8-orangeworkforce-control-centre/maintenance/gateway-configuration-email/).

  Email ID       Do not edit this. This is auto generated by the OrangeBot from Search Unread Email. The user must create a Search Unread Email
  (input)        before using this.

  Delimiter      Input text that represents the Delimiter. This allows the user to split the data in the form by choosing a specific key word. One
  (input)        example can be ":".
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the whole Form from the unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Email Form
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Delimiter as ":".

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the email Form
information.

 

### Get Form Field Value

You need to get the email using Search Unread Email.

#### Objective
To get a text value from an unread email.

#### Table Field
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe the task. This is optional.
  Description    
  (input)        

  Email Name     Input text that represents the name of the Email set by the user in [[Gateway Configuration
  (input)        (Email)]{.underline}](https://help.orangefinasia.com/docs/8-orangeworkforce-control-centre/maintenance/gateway-configuration-email/).

  Email ID       Do not edit this. This is auto generated by the OrangeBot from Search Unread Email. The user must create a Search Unread Email
  (input)        before using this.

  Delimiter      Input text that represents the Delimiter. This allows the user to extract the data after a chosen key word/number/special character.
  (input)        One example can be ":".

  Field Name     Input text that represents the keyword in the email for the OrangeBot to find so it can locate the data. For example, if the OrangeBot
  (input)        wants to find the Booking No, it will locate the data by looking for the keyword "BOOKING NO".

  Gvariable to   The OrangeBot will save the Result in a Gvariable created by the user. All Gvariables created/auto generated will be in the list. For
  Save (Dropdown example, if the user uses a Gvariable called "@Text@" and the Result is "1", it will save the result in the Gvariable, so as a result,
  List)          "1" will be saved as the value of "\@Text@".
  -------------- -----------------------------------------------------------------------------------------------------------------------------------------

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Booking No information from the unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so
it will not be the same as the image).

You need to create a new Global Variable.

#### Steps

Search Unread Email
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Subject (Get from unread email)

All fields not seen here do not need to be filled.

Get Form Field Value
1.  Set Email Name (Get from Gateway Configuration)

2.  Set Delimiter as ":"

3.  Set Field Name as "BOOKING NO" (Get from Email)

4.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Booking No
information.

 

## File/Folder Command

### Check File/Folder Existence

#### Objective
To check the existence of a File/Folder in a PC.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| File/Folder | Input text that represents the file/folder for the     |
| to Check    | OrangeBot to check.                                    |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Checking    | This dropdown list allows the user to check if:        |
| Mode        |                                                        |
| (Dropdown   | a)  Existence - The chosen file/folder exists.         |
| List)       |                                                        |
|             | b)  Readable - The chosen file/folder has text data to |
|             |     extract.                                           |
|             |                                                        |
|             | c)  Writable - The chosen file/folder can be edited.   |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### Existence

#### Objective
To check the existence of a File in a PC.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to check if this File exists in the PC.

You need to create a new Global Variable.

#### Steps

1.  Set the File/Folder to Check

2.  Set Checking Mode as Existence

3.  Set Gvariable as Text

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot detects that it is "True" that the file exists.

### Readable

#### Objective
To check if a File in a PC has text data to extract.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to check if this File has text data to extract.

You need to create a new Global Variable.

#### Steps

1.  Set the File/Folder to Check

2.  Set Checking Mode as Existence

3.  Set Gvariable as Text

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot detects that it is "True" that the file exists.

### Writable

#### Objective
To check if a File in a PC is editable and not read-only.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to check if this File is editable.

You need to create a new Global Variable.

#### Steps

4.  Set the File/Folder to Check

5.  Set Checking Mode as Existence

6.  Set Gvariable as Text

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot detects that it is "True" that the file is editable.

 

### Get File/Folder Listing

#### Objective
To get the File Path of all the files/folders in a Folder.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Folder Path | Input text that represents the folder for the          |
| to Get      | OrangeBot to check.                                    |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Mode        | This Dropdown List allows the user to check the:       |
| (Dropdown   |                                                        |
| List)       | a)  File - Retrieves the file path for all the files   |
|             |     in the folder.                                     |
|             |                                                        |
|             | b)  File (All) - Retrieves the file path for all the   |
|             |     files within all the subfolders.                   |
|             |                                                        |
|             | c)  Folder - Retrieves the folder path for all the     |
|             |     folders within the folder.                         |
|             |                                                        |
|             | d)  Folder (All) - Retrieves the folder path for all   |
|             |     the folders within all the subfolders.             |
|             |                                                        |
|             | e)  File and Folder - Retrieves the paths for all the  |
|             |     files and folders within the folder.               |
|             |                                                        |
|             | f)  File and Folder (All) - Retrieves the paths for    |
|             |     all the files and folders within the folder within |
|             |     all the subfolders.                                |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### File

#### Objective
To get the File Path of all the files in a Folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the files in the Folder.

You need to create a new Global Variable.

#### Steps

1.  Set the Folder Path to Get (File Path for the Folder)

2.  Set Mode as File

3.  Set Gvariable to Get as Text

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot finds the File Paths for all the files in the Folder.

 

### File (All)

#### Objective
To get the File Paths for all files in a Folder and
subfolders.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the File Paths for all the files in the Folder,
including the subfolders.

Before: The subfolder "Sample" also has more files inside.

You need to create a new Global Variable.

#### Steps

1.  Set the Folder Path to Get (File Path for the Folder)

2.  Set Mode as File (All)

3.  Set Gvariable to Get as Text

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot finds the File Paths for all the files in the Folder and
subfolders.

 

### Folder

#### Objective
To get the File Path for all the folders within the Folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the Folder Paths for the Folders within the
"Output" Folder.

You need to create a new Global Variable.

#### Steps

1.  Set the Folder Path to Get (File Path for the Folder)

2.  Set Mode as Folder

3.  Set Gvariable to Get as Text

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot finds the File Paths for all the Folders within the
Output Folder.

 

### Folder (All)

#### Objective
To get the File Paths for all the Folders in the Output
Folder and subfolders.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the File Paths for all the Folders in the Output
Folder, including the subfolders.

Before: Including the subfolders within "New Folder".

You need to create a new Global Variable.

#### Steps

1.  Set the Folder Path to Get (File Path for the Folder)

2.  Set Mode as Folder (All)

3.  Set Gvariable to Get as Text

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot finds the File Paths for all the Folders and subfolders
in the Output Folder.

### File and Folder

#### Objective
To get the File Path for all the files and folders in the
Folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the File and folder Paths in the Folder.

You need to create a new Global Variable.

#### Steps

1.  Set the Folder Path to Get (File Path for the Folder).

2.  Set Mode as File and Folder.

3.  Set Gvariable to Get as Text.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot finds the File and Folder Paths for all the Files and
Folders in the New Folder.

 

### File and Folder (All)

#### Objective
To get the File Paths for all the Files and Folders in the
New Folder and subfolders.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the Files and Folder Paths for the latest Folder.

Before: Including the subfolders within "New Folder".

Before: And Including the subfolders within "Sample".

You need to create a new Global Variable.

#### Steps

1.  Set the Folder Path to Get (File Path for the Folder)

2.  Set Mode as File and Folder (All)

3.  Set Gvariable to Get as Text

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot finds the File Paths for all the Folders and subfolders
in the Output Folder.

 

### Search File/Folder

#### Objective
To search a Folder.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Folder to   | Input text that represents the folder for the          |
| Search      | OrangeBot to check.                                    |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Search By   | This Dropdown List allows the user to search by:       |
| (Dropdown   |                                                        |
| List)       | a)  Keyword - This allows the user to search for       |
|             |     files/folders with a specific keyword. If the user |
|             |     sets "Test" as a keyword, it will search for any   |
|             |     file/folder that has the word "Test" within its    |
|             |     name.                                              |
+-------------+--------------------------------------------------------+
| Search      | Input text that represents the Keyword used if the     |
| Value       | user wants to search for files/folders using a keyword |
| (input)     | (leave blank if not needed).                           |
+-------------+--------------------------------------------------------+
| File        | If the user only wants to search for pdf files, input  |
| extension   | ".pdf". Leave blank to search for all files.           |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Search      | The recommended default is Top Directory Only.     |
| Options     |                                                        |
| (Dropdown   | The dropdown list allows the OrangeBot to search for   |
| List)       | files/folders by:                                      |
|             |                                                        |
|             | a)  All Directories: Includes all subfolders.          |
|             |                                                        |
|             | b)  Top Directory Only: Includes only the direct       |
|             |     files/folders in the chosen Folder. It will not    |
|             |     search through subfolders.                         |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### File (File Path)

#### Objective
To retrieve the File Paths for all the files in the New
Folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Files Paths for all the files in the New
Folder.

#### Steps

1.  Set the Folder to Search (Get the path for the New Folder)

2.  Set File or Folder as File

3.  Set Result Type as Full Path

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the file paths for all the files in the New
Folder.

 

### File (File Name)

#### Objective
To retrieve the Names for all the files in the New Folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Names for all the files in the New
Folder.

#### Steps

1.  Set the Folder to Search (Get the path for the New Folder)

2.  Set File or Folder as File

3.  Set Result Type as File Name

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the Names for all the files in the New Folder.

 

### File (Keyword & File Path)

#### Objective
To retrieve the File Paths for all the files in the New
Folder based on the keyword Company.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Files Path for all the files in the New
Folder based on the keyword Company.

#### Steps

1.  Set the Folder to Search (Get the path for the New Folder)

2.  Set File or Folder as File

3.  Set Search By as Keyword

4.  Set Search Value as Company

5.  Set Result Type as Full Path

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the Files Path for all the files in the New
Folder based on the keyword Company.

 

### File (Keyword & File Name)

#### Objective
To retrieve the Names for all the files in the New Folder
based on the keyword Statement.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Names for all the files in the New
Folder based on the keyword Statement.

#### Steps

1.  Set the Folder to Search (Get the path for the New Folder)

2.  Set File or Folder as File

3.  Set Search By as Keyword

4.  Set Search Value as Statement

5.  Set Result Type as File Name

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the Names for all the files in the New Folder
based on the keyword Statement.

 

### Folder (File Path)

#### Objective
To retrieve the File Paths for all the Folders in the New
Folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the File Paths for all the Folders in the
New Folder.

#### Steps

1.  Set the Folder to Search (Get the path for the New Folder)

2.  Set File or Folder as Folder

3.  Set Result Type as Full Path

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the File Paths for all the Folders in the New
Folder.

 

### Folder (File Name)

#### Objective
To retrieve the Names for all the Folders in the New Folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Names for all the Folders in the New
Folder.

#### Steps

1.  Set the Folder to Search (Get the path for the New Folder)

2.  Set File or Folder as Folder

3.  Set Result Type as File Name

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the Names for all the Folders in the New
Folder.

 

### Folder (Keyword & File Path)

#### Objective
To retrieve the File Paths for all the Folders in the New
Folder based on the keyword New.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the File Paths for all the Folders in the
New Folder based on the keyword New.

#### Steps

1.  Set the Folder to Search (Get the path for the New Folder)

2.  Set File or Folder as Folder

3.  Set Search By as Keyword

4.  Set Search Value as New

5.  Set Result Type as Full Path

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the File Paths for all the Folders in the New
Folder based on the keyword New.

 

### Folder (Keyword & File Name)

#### Objective
To retrieve the Names for all the Folders in the New Folder
based on the keyword New.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Names for all the Folders in the New
Folder based on the keyword New.

#### Steps

1.  Set the Folder to Search (Get the path for the New Folder)

2.  Set File or Folder as Folder

3.  Set Search By as Keyword

4.  Set Search Value as New

5.  Set Result Type as File Name

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the Names for all the Folders in the New Folder
based on the keyword New.

 

### Delete File/Folder

#### Objective
To delete the New Folder.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  File/Folder to Input text that represents the path of the file/folder
  Delete (input) chosen by the user to delete.
  -------------- --------------------------------------------------------

Before: This is the New Folder.

#### Steps

1.  Set the File/Folder to Delete (Get the path for the New Folder)

All fields not seen here do not need to be filled.

After: The Bot deletes the New Folder.

 

### Move File/Folder

#### Objective
To move a file/folder.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Source Full | Input text that represents the path of the file/folder |
| Path        | chosen by the user to move. For example:               |
| (input)     |                                                        |
|             | a)  Folder: C:\\Users\\Desktop\\Training           |
|             |     Folder\\OWF101\\General Training (101)             |
|             |     Advanced\\Template\\New folder\\               |
|             |                                                        |
|             | b)  File: C:\\Users\\Desktop\\Training             |
|             |     Folder\\OWF101\\General Training (101)             |
|             |     Advanced\\Template\\Order Record.xlsx          |
+-------------+--------------------------------------------------------+
| Destination | Input text that represents the new path of the         |
| Full Path   | file/folder when it has been moved to a new folder.    |
| (input)     | For example:                                           |
|             |                                                        |
|             | c)  Folder: C:\\Users\\Desktop\\Training           |
|             |     Folder\\OWF101\\General Training (101)             |
|             |     Advanced\\Output\\New folder\\                 |
|             |                                                        |
|             | d)  File: C:\\Users\\Desktop\\Training             |
|             |     Folder\\OWF101\\General Training (101)             |
|             |     Advanced\\Output\\Order Record.xlsx            |
|             |                                                        |
|             | In this example, we are moving the file/folder from  |
|             | the Template folder to the Output folder.            |
+-------------+--------------------------------------------------------+

 

#### Objective
To move the New Folder into the Exception Folder.

We need to move the New Folder.

Before: We need to move the New Folder into the Exception Folder.

#### Steps

1.  Set the Source Full Path (Get the path for New Folder)

2.  Set the Destination Full Path (Get the path for Exception and place
    the folder name "New folder" at the end)

All fields not seen here do not need to be filled.

After: The Bot moves the New Folder into the Exception folder.



### Zip File/Folder

#### Objective
To zip the Statement of Accounts PDF with a password.


#### Table Field
+---------------+------------------------------------------------------+
| Field         | Description                                          |
+---------------+------------------------------------------------------+
| Task Name     | Name of the task belong to the group                 |
+---------------+------------------------------------------------------+
| Task          | Input text that represents the Description to        |
| Description   | describe the task. This is optional.             |
| (input)       |                                                      |
+---------------+------------------------------------------------------+
| File/Folder   | Input text that represents the path of the           |
| to Zip        | file/folder chosen by the user to zip with/without a |
| (input)       | password. For example:                               |
|               |                                                      |
|               | a)  Folder: C:\\Users\\Desktop\\Training         |
|               |     Folder\\OWF101\\General Training (101)           |
|               |     Advanced\\Template\\New folder\\                 |
|               |                                                      |
|               | b)  File: C:\\Users\\Desktop\\Training           |
|               |     Folder\\OWF101\\General Training (101)           |
|               |     Advanced\\Template\\Order Record.xlsx            |
+---------------+------------------------------------------------------+
| Output Path   | Input text that represents the new path of the       |
| (input)       | file/folder when it has zipped. For example:         |
|               |                                                      |
|               | c)  Folder: C:\\Users\\Desktop\\Training         |
|               |     Folder\\OWF101\\General Training (101)           |
|               |     Advanced\\Output\\New folder.zip             |
|               |                                                      |
|               | d)  File: C:\\Users\\Desktop\\Training           |
|               |     Folder\\OWF101\\General Training (101)           |
|               |     Advanced\\Output\\Order Record.zip           |
|               |                                                      |
|               | Make sure there is a ".zip" at the end.              |
+---------------+------------------------------------------------------+
| Zip File      | Input text that represents the password for the      |
| Password      | zipped file/folder. Leave blank if not needed.       |
| (input)       |                                                      |
+---------------+------------------------------------------------------+
| A             | This is optional. This allows the user to        |
| uthentication | extract a chosen password from Authentication        |
| App (input)   | Configuration. The Authentication App refers to the  |
|               | input Name used when configuring Authentication      |
|               | Configuration.                                       |
+---------------+------------------------------------------------------+
| A             | This is optional. This allows the user to        |
| uthentication | extract a chosen password from Authentication        |
| User ID       | Configuration. The User ID refers to the input user  |
| (input)       | ID used when configuring Authentication              |
|               | Configuration. The username for the                  |
|               | application/website is what the user would usually   |
|               | choose. For example, if it is a website, it will use |
|               | the website username as the User ID.                 |
+---------------+------------------------------------------------------+

 

Before: This is the PDF that needs to be zipped.

Before: We need to zip the Statement of Accounts PDF with a password
into the Exception folder.

#### Steps

1.  Set the File/Folder to Zip (Get the path for the file)

2.  Set Output Path (Get the path for the Exception folder and put the
    name of the PDF at the end with ".zip")

3.  Set Zip File Password (Up to you)

All fields not seen here do not need to be filled.

After: Check the Exception folder.

The Statement of Account PDF is zipped with a password.

When you open it, it should ask for the password. Just enter the
password and you may access it.

 

### Unzip File/Folder

#### Objective
To unzip the Statement of Accounts zipped file with a
password.

#### Table Field
+---------------+------------------------------------------------------+
| Field         | Description                                          |
+---------------+------------------------------------------------------+
| Task Name     | Name of the task belong to the group                 |
+---------------+------------------------------------------------------+
| Task          | Input text that represents the Description to        |
| Description   | describe the task. This is optional.             |
| (input)       |                                                      |
+---------------+------------------------------------------------------+
| Zip File Path | Input text that represents the path of the           |
| (input)       | file/folder chosen by the user to unzip a file       |
|               | with/without a password. For example:                |
|               |                                                      |
|               | a)  Folder: C:\\Users\\Desktop\\Training         |
|               |     Folder\\OWF101\\General Training (101)           |
|               |     Advanced\\Template\\New folder.zip               |
|               |                                                      |
|               | b)  File: C:\\Users\\Desktop\\Training           |
|               |     Folder\\OWF101\\General Training (101)           |
|               |     Advanced\\Template\\Order Record.zip             |
+---------------+------------------------------------------------------+
| Extract To    | Input text that represents the path of the folder    |
| (input)       | where it will place the unzipped file/folder. For    |
|               | example:                                             |
|               |                                                      |
|               | a)  Extract Here: Default setting. The OrangeBot |
|               |     will extract the zipped file/folder to the same  |
|               |     folder the zipped file is in.                    |
|               |                                                      |
|               | b)  Folder: C:\\Users\\Desktop\\Training         |
|               |     Folder\\OWF101\\General Training (101)           |
|               |     Advanced\\Output\\                               |
|               |                                                      |
|               | c)  File: C:\\Users\\Desktop\\Training           |
|               |     Folder\\OWF101\\General Training (101)           |
|               |     Advanced\\Output\\                               |
+---------------+------------------------------------------------------+
| Zip File      | Input text that represents the password for the      |
| Password      | zipped file/folder. Leave blank if there is no       |
| (input)       | password.                                            |
+---------------+------------------------------------------------------+
| A             | This is optional. This allows the user to        |
| uthentication | extract a chosen password from Authentication        |
| App (input)   | Configuration. The Authentication App refers to the  |
|               | input Name used when configuring Authentication      |
|               | Configuration.                                       |
+---------------+------------------------------------------------------+
| A             | This is optional. This allows the user to        |
| uthentication | extract a chosen password from Authentication        |
| User ID       | Configuration. The User ID refers to the input user  |
| (input)       | ID used when configuring Authentication              |
|               | Configuration. The username for the                  |
|               | application/website is what the user would usually   |
|               | choose. For example, if it is a website, it will use |
|               | the website username as the User ID.                 |
+---------------+------------------------------------------------------+

Before: This is the zipped file that needs to be unzipped.

#### Steps

1.  Set Zip File Path (Get the path for the file)

2.  Set Extract to (Get the path for the Exception folder and put the
    name of the PDF)

3.  Set Zip File Password (Up to you)

All fields not seen here do not need to be filled.

After: The Statement of Account file is unzipped.

 

### Get File/Folder Info

#### Objective
To retrieve the info of a file/folder.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| File/Folder | Input text that represents the file/folder for the     |
| Path        | OrangeBot to check.                                    |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Get Mode    | This Dropdown List allows the user to retrieve the     |
| (Dropdown   | info regarding:                                        |
| List)       |                                                        |
|             | a)  File Name - Name of file with extension. (e.g.     |
|             |     Statement of Accounts.pdf)                         |
|             |                                                        |
|             | b)  File Name (Without Extension) - Name of file       |
|             |     without extension. (e.g. Statement of Accounts)    |
|             |                                                        |
|             | c)  File Extension - File extension. (e.g. ".pdf")     |
|             |                                                        |
|             | d)  File Extension (Without Dot) - File extension      |
|             |     without dot. (e.g. "pdf")                          |
|             |                                                        |
|             | e)  Folder Name - File extension. (e.g. ".pdf")        |
|             |                                                        |
|             | f)  Folder Path - Name of folder. (e.g. New folder)    |
|             |                                                        |
|             | g)  Created Time - When the File/Folder was created    |
|             |     (e.g. 2023-09-08 06:46:01)                         |
|             |                                                        |
|             | h)  Last Modified Time - When the File/Folder was last |
|             |     modified (e.g. 2023-08-08 11:05:06)                |
|             |                                                        |
|             | i)  Last Access Time - When the File/Folder was last   |
|             |     accessed (e.g. 2023-08-08 11:05:06)                |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### File Name

#### Objective
To get the name of the File with the file extension.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the name of the highlighted file.

You need to create a new Global Variable.

#### Steps

1.  Set File/Folder Path.

2.  Set Get Mode as File Name.

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the name of the File with the
Extension.



### File Name (Without Extension)

#### Objective
To get the name of the File without the file extension.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the name of the highlighted file.

You need to create a new Global Variable.

#### Steps

1.  Set File/Folder Path.

2.  Set Get Mode as File Name (Without Extension).

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the name of the File without the
Extension.

 

### File Extension

#### Objective
To get the file extension of a file.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the file extension of the highlighted file.

You need to create a new Global Variable.

#### Steps

1.  Set File/Folder Path.

2.  Set Get Mode as File Extension.

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the the File Extension, which is
".pdf".

 

### File Extension (Without Dot)

#### Objective
To get the file extension of a file without the dot.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the file extension of the highlighted file.

You need to create a new Global Variable.

#### Steps

1.  Set File/Folder Path.

2.  Set Get Mode as File Extension (Without Dot).

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the the File Extension, which is
"pdf".

 

### Folder Name

#### Objective
To get the name of a Folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the file extension of the highlighted file.

You need to create a new Global Variable.

#### Steps

1.  Set File/Folder Path.

2.  Set Get Mode as Folder Name.

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the name the Folder holding the
file, which is "Sample".
 

### Folder Path

#### Objective
To get the path of a Folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the file extension of the highlighted file.

You need to create a new Global Variable.

#### Steps

1.  Set File/Folder Path.

2.  Set Get Mode as Folder Path.

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the path of the Folder holding the
file.

 

### Created Time

#### Objective
To get the create time of a file/folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the file extension of the highlighted file.

You need to create a new Global Variable.

#### Steps

1.  Set File/Folder Path.

2.  Set Get Mode as Created Time.

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the created time of the file.

 

### Last Modified Time

#### Objective
To get the last modified time of a file/folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the created time of the highlighted file.

You need to create a new Global Variable.

#### Steps

1.  Set File/Folder Path.

2.  Set Get Mode as Last Modified Time.

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the last modified time of the
file.

 

### Last Access Time

#### Objective
To get the last accessed time of a file/folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the created time of the highlighted file.

You need to create a new Global Variable.

#### Steps

1.  Set File/Folder Path.

2.  Set Get Mode as Last Access Time.

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the last accessed time of the
file.

 

### Create File/Folder

#### Objective
To create a a text file or Folder. It is usually used to
create folders, but it can create a text file as well.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| File/Folder | Input text that represents the path of the text file   |
| to Create   | or folder to create.                                   |
| (input)     |                                                        |
|             | For example:                                           |
|             |                                                        |
|             | a)  Folder -                                       |
|             |     C:\\Users\\InsiteMY\\Desktop\\Training             |
|             |     Folder\\OWF201\\General Training                   |
|             |     (201)\\Output\\Exception File\\New                 |
|             |     folder\\Sample\\                               |
|             |                                                        |
|             | b)  File - C:\\Users\\InsiteMY\\Desktop\\Training  |
|             |     Folder\\OWF201\\General Training                   |
|             |     (201)\\Output\\Exception File\\New                 |
|             |     folder\\Sample.txt                             |
+-------------+--------------------------------------------------------+

### Folder

Before: We need to create a folder in this folder.

#### Steps

1.  Set File/Folder to Create and set the name of the folder at the end.

All fields not seen here do not need to be filled.

After: Result shows that the Bot creates the "Sample" folder.

### File

Before: We need to create a file in this folder.

#### Steps

1.  Set File/Folder to Create and set the name of the file with ".txt"
    at the end.

All fields not seen here do not need to be filled.

After: Result shows that the Bot creates the "Sample" folder.

 

### Rename File/Folder

#### Objective
To rename a File/Folder.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| File/Folder | Input text that represents the path of the text file   |
| to Rename   | or folder to create.                                   |
| (input)     |                                                        |
|             | For example:                                           |
|             |                                                        |
|             | c)  Folder -                                       |
|             |     C:\\Users\\InsiteMY\\Desktop\\Training             |
|             |     Folder\\OWF201\\General Training                   |
|             |     (201)\\Output\\Exception File\\New                 |
|             |     folder\\Sample\\                               |
|             |                                                        |
|             | d)  File - C:\\Users\\InsiteMY\\Desktop\\Training  |
|             |     Folder\\OWF201\\General Training                   |
|             |     (201)\\Output\\Exception File\\New                 |
|             |     folder\\Sample.txt                             |
+-------------+--------------------------------------------------------+
| New File    | Input text that represents the new name of the         |
| Name        | file/folder.                                           |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+

### File

#### Objective
To rename a File.

Before: We need to rename this file to "Testing".

#### Steps

1.  Set File/Folder to Rename.

2.  Set New File/Folder Name as "Testing".

All fields not seen here do not need to be filled.

After: Result shows that the Bot renames it to "Testing".

### Folder

#### Objective
To rename a folder.

Before: We need to rename this folder to "Testing".

#### Steps

1.  Set File/Folder to Rename.

2.  Set New File/Folder Name as "Testing".

All fields not seen here do not need to be filled.

After: Result shows that the Bot renames it to "Testing".


### Read TXT File

#### Objective
To extract all the text in a txt File. (You can also use this
to open the file with Microsoft Excel commands).

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| TXT File    | The path of the text file to extract data or open in   |
| Path        | Excel                                                  |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Read Result | The dropdown list will determine the format for the    |
| as          | result, including:                                     |
| (Dropdown   |                                                        |
| List)       | a)  Text - extract all the text in a single paragraph. |
|             |                                                        |
|             | b)  Lines - Extract all text and arrange them in a     |
|             |     list according to lines. So if there are 60 lines  |
|             |     of text in the file, then there will be 60 items   |
|             |     in the list.                                       |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### Text

#### Objective
To extract all the text in a txt File. (You can also use this
to open the file with Microsoft Excel commands).

Make sure to set the last task as Toggle Breakpoint.

Before: We need to extract this text.

You need to create a new Global Variable.

#### Steps

1.  Set TXT File Path

2.  Set Read Result as Text.

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

If you want to open the file in Excel, create an "Open Excel" then use
the same path for the Excel Path.

After: Check Global Variable to see the results.

After: Result shows that the Bot saves all of the text in the txt file.

Then click Resume.

After: After reading, you can also use Microsoft Excel commands to open
the file and read/edit.

After: It will open the Excel after you click Resume.

 

### Lines

#### Objective
To extract all the text in a txt File in the form of a list.
(You can also use this to open the file with Microsoft Excel commands).

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to extract this text.

You need to create a new Global Variable.

#### Steps

1.  Set TXT File Path

2.  Set Read Result as Text.

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

If you want to open the file in Excel, create an "Open Excel" then use
the same path for the Excel Path.

After: Check Global Variable to see the results.

After: Result shows that the Bot saves all of the text in the txt file.

Then click Resume.

After: It will open the Excel after you click Resume.

### Write TXT File

#### Objective
To edit a txt file.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| TXT File    | Input text that represents the path of the text file   |
| Path        | to edit.                                               |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Writing     | This Dropdown List allows the user to choose how to    |
| Mode        | edit the file. The two modes are:                      |
| (Dropdown   |                                                        |
| List)       | a)  Append: Add next text below the text in the file.  |
|             |                                                        |
|             | b)  Overwrite: Delete the text in the file and replace |
|             |     the data with new text.                            |
+-------------+--------------------------------------------------------+
| Content     | The Dropdown List allows the user to set the format    |
| Type        | for the inserted text, including:                      |
| (Dropdown   |                                                        |
| List)       | a)  Lines - Insert text inside the Text file.          |
|             |                                                        |
|             | b)  Table - Insert a table inside the Text file.       |
+-------------+--------------------------------------------------------+
| Lines Value | Only used if the user selects "Lines" in Content   |
| (input)     | Type. Input text that represents the user needs to     |
|             | place the text that needs to be inserted into the Text |
|             | File.                                                  |
+-------------+--------------------------------------------------------+
| Table Value | Only used if the user selects "Table" in Content   |
| (input)     | Type. Input text that represents the user needs to     |
|             | place the table that needs to be inserted into the     |
|             | Text File.                                             |
+-------------+--------------------------------------------------------+

### Append

Before: The Bot needs to add text to the end of the TXT file.

#### Objective
To append (add) text to the end of a TXT file.

#### Steps

1.  Set TXT File Path.

2.  Set Writing Mode as Append.

3.  Set Content TYpe as Lines.

4.  Set Lines Value as Testing.

All fields not seen here do not need to be filled.

After: The Bot has added "Testing" to the end of the TXT file.

### Overwrite

Before: The Bot needs to overwrite (replace) text in the TXT file.

#### Objective
To overwrite (replace) text in the TXT file.

#### Steps

1.  Set TXT File Path.

2.  Set Writing Mode as Overwrite.

3.  Set Content Type as Lines.

4.  Set Lines Value as Testing.

All fields not seen here do not need to be filled.

After: The Bot has replaced the text with "Testing" in the TXT file.

### Read CSV File

#### Objective
To get all the text in a csv File. (You can also use this to
open the file with Microsoft Excel commands)

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  CSV File Path  Input text that represents the path of the CSV file to
  (input)        edit.

  Remove First   This Dropdown List allows the user to choose if the text
  Row (Dropdown  result will include the first row.
  List)          

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the text in this csv file.

You need to create a new Global Variable.

#### Steps


1.  Set CSV File Path.

2.  Set Remove First Row as No.

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

If you want to open the file in Excel, create an "Open Excel" then use
the same path for the Excel Path.

After: Check Global Variable to see the results.

After: Result shows that the Bot saves all of the text in the csv file.

Then click Resume.

After: It will open the Excel after you click Resume.

### Write CSV File

#### Objective
To edit a CSV file.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| CSV File    | Input text that represents the path of the CSV file to |
| Path        | edit.                                                  |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Writing     | This Dropdown List allows the user to choose how to    |
| Mode        | edit the file. The two modes are:                      |
| (Dropdown   |                                                        |
| List)       | c)  Append: Add next text below the text in the file.  |
|             |                                                        |
|             | d)  Overwrite: Delete the text in the file and replace |
|             |     the data with new text.                            |
+-------------+--------------------------------------------------------+
| Table Value | Input text that represents the text of that will be    |
| to Write    | inserted into the CSV file.                            |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+

### Append

#### Objective
To append (add) text to the end of a CSV file.

Before: The Bot needs to add text to the end of the CSV file.

#### Steps

1.  Set TXT File Path.

2.  Set Writing Mode as Append.

3.  Set Table Value.

All fields not seen here do not need to be filled.

After: The Bot has added the Booking No to the end of the TXT file.

### Overwrite

#### Objective
To overwrite (replace) text in the CSV file.

Before: The Bot needs to overwrite (replace) text in the CSV file.

#### Steps


1.  Set TXT File Path.

2.  Set Writing Mode as Overwrite.

3.  Set Table Value.

All fields not seen here do not need to be filled.

After: The Bot has replaced the text with "Testing" in the CSV file.

## Google Drive Command

### Initialize Service

#### Objective
For the Bot to gain access to Google Drive.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Google         Input text that represents the path of the JSON file
  Credentials    that will be used as credentials to access the Google
  Path (input)   Drive.
  -------------- --------------------------------------------------------

Go to https://console.cloud.google.com/.

Click "Select a project".

Click "New Project".

Create a New Project.

Click "APIs & Services", and then click "Credentials".

Click on the project you just created.

Click "Manage service accounts".

Click "Create Service Account".

Create a Service Account.

Click "Done".

Click on the Email.

Click "Add Key".

Click "Create new key".

Create a JSON file.

It should download a JSON file.

Search for "Google Drive API".

Click "Enable".

Search for "Google Sheets API".

Click "Enable".

#### Steps

1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

### Create Permission

#### Objective
To give access to another user to a Google Drive File.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group.                  |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| File ID     | Input text that represents the ID of the Google Drive  |
| (input)     | File.                                                  |
+-------------+--------------------------------------------------------+
| Role        | This gives permission for another user as a:           |
| (DropDown   |                                                        |
| List)       | a)  Writer: The user gets permission to edit the file  |
|             |                                                        |
|             | b)  Reader: The user gets permission to read the file, |
|             |     not to edit.                                       |
+-------------+--------------------------------------------------------+

### Writer

#### Objective
To give access to another user to edit a Google Drive File.

First, create this script:

Before: We need to give access of this Google Drive file to a new user.

We need to get the File ID first.

#### Steps


1.  Set File ID.

2.  Set Email.

3.  Set Role as Writer.

All fields not seen here do not need to be filled.

After: The OrangeBot has given access of the Google Drive file to a new
user with this email as an Editor.

 

### Reader

#### Objective
To give access to another user to read a Google Drive File.

First, create this script:

Before: We need to give access of this Google Drive file to a new user.

We need to get the File ID first.

#### Steps

1.  Set File ID.

2.  Set Email.

3.  Set Role as Reader.

All fields not seen here do not need to be filled.

After: The OrangeBot has given access of the Google Drive file to a new
user with this email as a Viewer.
 

### Create File/Folder

#### Objective
For the Bot to create a Google Doc.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group.                  |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Folder ID   | The ID of the Google Drive Folder. Fill in if creating |
|             | a File. The OrangeBot will create the file inside the  |
|             | chosen Google Drive folder.                            |
+-------------+--------------------------------------------------------+
| File/Folder | Name of the file/folder to create                      |
| Name        |                                                        |
+-------------+--------------------------------------------------------+
| File/Folder | This allows the user to create:                        |
| Type        |                                                        |
|             | a)  Google Docs                                        |
|             |                                                        |
|             | b)  Google Sheets                                      |
|             |                                                        |
|             | c)  Google Slides                                      |
|             |                                                        |
|             | d)  Folder                                             |
+-------------+--------------------------------------------------------+

### Google Doc

#### Objective
For the Bot to create a Google Doc.

First, create this script:

Before: We need to create a Google Doc in the "Demo Folder".

We need to get the Folder ID first.

#### Steps


Initialize Service
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Create File/Folder
1.  Set Folder ID.

2.  Set File/Folder Name as "Demo".

3.  Set File/Folder Type as Google Doc.

All fields not seen here do not need to be filled.

After: The OrangeBot create a Google Doc called "Demo".

 

### Google Sheet

#### Objective
For the Bot to create a Google Sheet.

First, create this script:

Before: We need to create a Google Sheet in the "Demo Folder".

We need to get the Folder ID first.

#### Steps


Initialize Service
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Create File/Folder
1.  Set Folder ID.

2.  Set File/Folder Name as "Demo".

3.  Set File/Folder Type as Google Sheet.

All fields not seen here do not need to be filled.

After: The OrangeBot create a Google Sheet called "Demo".

 

### Google Slides

#### Objective
For the Bot to create a Google Slide.

First, create this script:

Before: We need to create a Google Slides in the "Demo Folder".

We need to get the Folder ID first.

#### Steps


Initialize Service
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Create File/Folder
1.  Set Folder ID.

2.  Set File/Folder Name as "Demo".

3.  Set File/Folder Type as Google Slide.

All fields not seen here do not need to be filled.

After: The OrangeBot create a Google Slide called "Demo".

 

### Folder

#### Objective
For the Bot to create a Google Drives Folder.

First, create this script:

Before: We need to create a Google Drive Folder in the "Demo Folder".

We need to get the Folder ID first.

#### Steps


Initialize Service
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Create File/Folder
1.  Set Folder ID.

2.  Set File/Folder Name as "Demo".

3.  Set File/Folder Type as Folder.

All fields not seen here do not need to be filled.

After: The OrangeBot create a Folder called "Demo".

 

### Search File/Folder

#### Objective
For the Bot to search for a File/Folder.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group.                  |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Folder ID   | Input text that represents the ID of the Google Drive  |
| (input)     | Folder. Fill in if searching a File. The OrangeBot     |
|             | will search for the files inside the chosen Google     |
|             | Drive folder.                                          |
+-------------+--------------------------------------------------------+
| File/Folder | Input text that represents the Name of the file/folder |
| Name        | to search.                                             |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Action Mode | This Dropdown List allows the user to search for:      |
| (Dropdown   |                                                        |
| List)       | a)  File                                               |
|             |                                                        |
|             | b)  Folder                                             |
+-------------+--------------------------------------------------------+

### File

#### Objective
For the Bot to search for a File.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the "Demo" file.

We need to get the Folder ID first.

#### Steps


Initialize Service
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Search File/Folder
1.  Set Folder ID.

2.  Set File/Folder Name as "Demo".

3.  Set Action Mode as File.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The OrangeBot gets the File ID of the "Demo" file.

 

### Folder

#### Objective
For the Bot to search for a Folder.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the "Example" Folder.

We need to get the Folder ID first.

#### Steps


Initialize Service
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Search File/Folder
1.  Set Folder ID.

2.  Set File/Folder Name as "Example".

3.  Set Action Mode as Folder.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The OrangeBot gets the Folder ID of the "Example" Folder.

 

### Download File

#### Objective
For the Bot to download a File.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group.

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  File ID        Input text that represents the ID of the Google Drive
  (input)        File.

  File Path      Input text that represents the path of the file after it
  (input)        has been downloaded.
  -------------- --------------------------------------------------------

First, create this script:

Before: We need to download the "Demo" file into the "Save Email
Attachment" folder.

We need to get the File ID first.

#### Steps


Initialize Service
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Download File
1.  Set File ID.

2.  Set File Path as the folder path ending with "\\Demo.docx".

All fields not seen here do not need to be filled.

After: The OrangeBot downloaded the "Demo" file.

 

### Export Google Sheets

#### Objective
For the Bot to export a file.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group.                  |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| File ID     | Input text that represents the ID of the Google Drive  |
| (input)     | File.                                                  |
+-------------+--------------------------------------------------------+
| File Path   | Input text that represents the path of the file after  |
| (input)     | it has been downloaded.                                |
+-------------+--------------------------------------------------------+
| Mime Type   | The format of the file when it is exported. The        |
| Dropdown    | Dropdown List allows the OrangeBot to export the file  |
| List        | as a:                                                  |
|             |                                                        |
|             | a)  CSV                                                |
|             |                                                        |
|             | b)  PDF                                                |
|             |                                                        |
|             | c)  XLSX (Excel file)                                  |
+-------------+--------------------------------------------------------+

### CSV

#### Objective
For the Bot to download a Google Sheets as a CSV file.

First, create this script:

Before: We need to download the "Demo" file into the "Save Email
Attachment" folder.

We need to get the File ID first.

#### Steps

Initialize Service
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Export Google Sheets
1.  Set File ID.

2.  Set File Path as the folder path ending with "\\Demo.csv".

3.  Set Mime Type as CSV.

All fields not seen here do not need to be filled.

After: The OrangeBot downloaded the "Demo" file as a CSV file.



### XLSX

#### Objective
For the Bot to download a Google Sheets as an XLSX file.

First, create this script:

Before: We need to download the "Demo" file into the "Save Email
Attachment" folder.

We need to get the File ID first.

#### Steps


Initialize Service
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Export Google Sheets
1.  Set File ID.

2.  Set File Path as the folder path ending with "\\Demo.xlsx".

3.  Set Mime Type as XLSX.

All fields not seen here do not need to be filled.

After: The OrangeBot downloaded the "Demo" file as an XLSX file.

 

### PDF

#### Objective
For the Bot to download a Google Sheets as a PDF file.

First, create this script:

Before: We need to download the "Demo" file into the "Save Email
Attachment" folder.

We need to get the File ID first.

#### Steps


Initialize Service
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Export Google Sheets
1.  Set File ID.

2.  Set File Path as the folder path ending with "\\Demo.pdf".

3.  Set Mime Type as PDF.

All fields not seen here do not need to be filled.

After: The OrangeBot downloaded the "Demo" file as a PDF file.

## Google Sheet Command

### Initialize Service

#### Objective
For the Bot to gain access to Google Sheets.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Credentials    Input text that represents the path of the JSON file
  Path (input)   that will be used as credentials to access the Google
                 Sheets. Make sure to complete Google Drive:Initialize Service before doing this.
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service before doing
this.

First, create this script:

Go to https://console.cloud.google.com/.

Click "Select a project".

Click "New Project".

Create a New Project.

Click "APIs & Services", and then click "Credentials".

Click on the project you just created.

Click "Manage service accounts".

Click "Create Service Account".

Create a Service Account.

Click "Done".

Click on the Email.

Click "Add Key" and Click "Create new key".

Create a JSON file.

It should download a JSON file.

Search for "Google Drive API".

Click "Enable".

Search for "Google Sheets API".

Click "Enable".

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

### Rename Spreadsheet

#### Objective
For the Bot to rename a Google Sheet Spreadsheet.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  New            Input text that represents the new name of the Google
  Spreadsheet    Sheet File after it is renamed.
  Name (input)   
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service before doing this.

First, create this script:

Before: We need to rename the "Demo" Spreadsheet.

First, we need the Google Sheet ID.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Rename Spreadsheet
1.  Set Spreadsheet ID

2.  Set New Spreadsheet Name

All fields not seen here do not need to be filled.

After: The Bot renames the Spreadsheet to "Demo 2".
 

### Check Sheet Exist

#### Objective
For the Bot to check if a Google Sheet Spreadsheet exists.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  Sheet Name     Input text that represents the Sheet Name of the Google
  (input)        Sheet file the user wants to check.

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service before doing this.

\
Make sure to set the last task as Toggle Breakpoint.

Before: We need to check if the "Sheet1" Sheet exists.

First, we need the Google Sheet ID.

You need to create a new Global Variable.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Check Sheet Exist
1.  Set Spreadsheet ID

2.  Set Sheet Name

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot finds that the "Sheet1" sheet exists.

 

### Rename Sheet

#### Objective
For the Bot to rename the "Sheet1" sheet to "Demo".

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  Sheet Name     Input text that represents the Sheet Name of the Google
  (input)        Sheet file the user wants to check.

  New Sheet Name Input text that represents the new Sheet Name after it
  (input)        has been renamed.
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service before doing this.

First, create this script:

Before: We need to check if the "Sheet1" Sheet exists.

First, we need the Google Sheet ID.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Rename Sheet
1.  Set Spreadsheet ID

2.  Set Sheet Name"as "Sheet1"

3.  Set New Sheet Name as "Demo"

All fields not seen here do not need to be filled.

After: The Bot renames "Sheet1" to "Demo".

 

### Search Cell

#### Objective
For the Bot to search for a text value in the Google Sheet.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Spreadsheet | Input text that represents the ID of the Google Sheet  |
| ID (input)  | file.                                                  |
+-------------+--------------------------------------------------------+
| Sheet Name  | Input text that represents the Sheet Name of the       |
| (input)     | Google Sheet file the user wants to check.             |
+-------------+--------------------------------------------------------+
| Row Start   | Input text that represents the start row of the Range  |
| (input)     | to be searched (e.g. "1","2",etc.)                     |
+-------------+--------------------------------------------------------+
| Column      | Input text that represents the start column of the     |
| Start       | Range to be searched (e.g. "A" or "1", "B" or          |
| (input)     | "2",etc.)                                              |
+-------------+--------------------------------------------------------+
| Row End     | Input text that represents the end row of the Range to |
| (input)     | be searched (e.g. "100","200",etc.)                    |
+-------------+--------------------------------------------------------+
| Column End  | Input text that represents the end column of the Range |
| (input)     | to be searched (e.g. "Y" or "25", "Z" or "26",etc.)    |
+-------------+--------------------------------------------------------+
| Action Mode | Recommended default is Range.                      |
| (Dropdown   |                                                        |
| List)       | This Dropdown List allows the user to search the       |
|             | Google Sheet by                                        |
|             |                                                        |
|             | a)  Row: Search through rows.                          |
|             |                                                        |
|             | b)  Column: Search through columns.                    |
|             |                                                        |
|             | c)  Range: Search through rows and columns.            |
+-------------+--------------------------------------------------------+
| Condition   | This Dropdown List allows the user to search cells     |
| (Dropdown   | with a specified value (e.g. 123) by:                  |
| List)       |                                                        |
|             | a)  Exactly: Is exactly the same as all the data in    |
|             |     the cell. For example, if the searched value is    |
|             |     "123" and the value in the cell is also exactly    |
|             |     "123", it will be marked as true.              |
|             |                                                        |
|             | b)  Contains: Is a partial match with the data in the  |
|             |     cell. For example, if the searched value is "1"    |
|             |     and the value in the cell is "123", it will be     |
|             |     marked as true.                                |
+-------------+--------------------------------------------------------+
| Value to    | Input text that represents the text data that will be  |
| Set (input) | searched in the Google Sheet file (e.g. 123)           |
+-------------+--------------------------------------------------------+

### Exactly

#### Objective
For the Bot to search for the cells that have the exact value
of "Line" in the Google Sheet.

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service before doing this.


Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the cells with the exact value of "Line".

First, we need the Google Sheet ID.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Search Cell
1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Sheet1".

3.  Set Row Start as 1.

4.  Set Column Start as E.

5.  Set Row End as 10,000.

6.  Set Column End as F.

7.  Set Action Mode to "Range".

8.  Set Condition to "Exactly".

9.  Set Value to Set as "Line".

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot can find the cells with "Line" and identifies 7 cells in
total.

 

### Contains

#### Objective
For the Bot to search for the cells with "+" in the Google
Sheet.

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service before doing this.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the cells with "+".

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Search Cell
1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Sheet1".

3.  Set Row Start as 1.

4.  Set Column Start as B.

5.  Set Row End as 10,000.

6.  Set Column End as E.

7.  Set Action Mode to "Range".

8.  Set Condition to "Contains".

9.  Set Value to Set as "+".

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot can find the cells with "+" and identifies 6 cells in
total.



### Get Cell Value

#### Objective
For the Bot to save the data regarding the name in the cell
"A2".

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  Sheet Name     Input text that represents the Sheet Name of the Google
  (input)        Sheet file the user wants to check.

  Row Number     Input text that represents the row of the data to be
  (input)        extracted

  Column Number  Input text that represents the column of the data to be
  (input)        extracted

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service before doing this.

Make sure to set the last task as Toggle Breakpoint.

Before: We need to save the name.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

You need to create a new Global Variable.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Get Cell Value
1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Sheet1".

3.  Set Row Number as 2.

4.  Set Column Number as A.

5.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot saves the name in \@Text@.

 

### Set Cell Value

#### Objective
For the Bot to set "123" inside the Google Sheet.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  Sheet Name     Input text that represents the Sheet Name of the Google
  (input)        Sheet file the user wants to check.

  Row Number     Input text that represents the row to insert the data.
  (input)        

  Column Number  Input text that represents the column to insert the
  (input)        data.

  Value to Set   Input text that represents the data that will be
  (input)        inserted into the cell.
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service before doing this.

First, create this script:

Before: We need to set "123" in A1.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Set Cell Value
1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Demo".

3.  Set Row Number as 1.

4.  Set Column Number as A.

5.  Set Value to Set as "123"

All fields not seen here do not need to be filled.

After: The Bot sets "123" in A1.

 

### Get Row Value

#### Objective
For the Bot to extract data from an entire row

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  Sheet Name     Input text that represents the Sheet Name of the Google
  (input)        Sheet file the user wants to check.

  Row Number     Input text that represents the row of the data to be
  (input)        extracted

  Column Start   Input text that represents the start column of the Range
  (input)        to be extracted (e.g. "A" or "1", "B" or "2",etc.)

  Column End     Input text that represents the end column of the Range
  (input)        to be extracted (e.g. "100","200",etc.)
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service before doing this.


Make sure to set the last task as Toggle Breakpoint.

Before: We need to set "123" in A1.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Get Row Value
1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Sheet1".

3.  Set Row Number as 2.

4.  Set Column Number (Start) as A.

5.  Set Column Number (End) as C.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot saves contact info of Shameem in Row 2.

 

### Set Row Value

#### Objective
For the Bot to set data from an entire row into a new row..

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  Sheet Name     Input text that represents the Sheet Name of the Google
  (input)        Sheet file the user wants to check.

  Row Number     Input text that represents the row to insert the data.
  (input)        

  Column Number  Input text that represents the start column to insert
  (input)        the data.

  Value to Set   Input text that represents the data that will be
  (input)        inserted.
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service AND Google Sheet: Get Row Value before
doing this.

First, create this script:

Before: This has been saved by Get Row Value.

Before: We need to place the data in another spreadsheet.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Get Row Value
1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Sheet1".

3.  Set Row Number as 2.

4.  Set Column Number (Start) as A.

5.  Set Column Number (End) as C.

All fields not seen here do not need to be filled.

Set Row Value
1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Demo".

3.  Set Row Number as 1.

4.  Set Column Number (Start) as A.

5.  Set Value to Set as \@GoogleSheetsRowResult@.

All fields not seen here do not need to be filled.

After: The Bot places the data in Row 1.

 

### Get Column Value

#### Objective
For the Bot to save the data regarding the contact info of
Shameem in row 2.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  Sheet Name     Input text that represents the Sheet Name of the Google
  (input)        Sheet file the user wants to check.

  Column Number  Input text that represents the column of the data to be
  (input)        extracted

  Row Start      Input text that represents the start row of the Range to
  (input)        be extracted.

  Row End        Input text that represents the end row of the Range to
  (input)        be extracted.
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service before doing this.

First, create this script:

Before: We need to save the data regarding all the names.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Get Column Value\

1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Sheet1".

3.  Set Column Number as A.

4.  Set Row Number (Start) as 2.

5.  Set Row Number (End) as 4.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot saves info of names in Column 1.

 

### Set Column Value

#### Objective
For the Bot to place data in Column A.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  Sheet Name     Input text that represents the Sheet Name of the Google
  (input)        Sheet file the user wants to check.

  Row Number     Input text that represents the row to insert the data.
  (input)        

  Column Number  Input text that represents the start column to insert
  (input)        the data.

  Value to Set   Input text that represents the data that will be
  (input)        inserted.
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service AND Google Sheet: Get Column Valuebefore doing this.

First, create this script:

Before: This is the data from Get Column Value.

Before: We need to place the data in a new spreadsheet.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Get Column Value\

1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Sheet1".

3.  Set Column Number as A.

4.  Set Row Number (Start) as 2.

5.  Set Row Number (End) as 4.

All fields not seen here do not need to be filled.

Set Column Value
1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Demo".

3.  Set Row Number as 1.

4.  Set Column Number (Start) as A.

5.  Set Value to Set as \@GoogleSheetsColumnResult@.

All fields not seen here do not need to be filled.

After: The Bot places the data in Column A.

 

### Get Range Value

#### Objective
For the Bot to save the data from a table.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  Sheet Name     Input text that represents the Sheet Name of the Google
  (input)        Sheet file the user wants to check.

  Row Start      Input text that represents the start row of the Range to
  (input)        be extracted (e.g. "1","2",etc.)

  Column Start   Input text that represents the start column of the Range
  (input)        to be extracted (e.g. "A" or "1", "B" or "2",etc.)

  Row End        Input text that represents the end row of the Range to
  (input)        be extracted (e.g. "100","200",etc.)

  Column End     Input text that represents the end column of the Range
  (input)        to be extracted (e.g. "Y" or "25", "Z" or "26",etc.)
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service before doing this.


Make sure to set the last task as Toggle Breakpoint.

Before: We need to save the data in the table.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Get Range Value
1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Sheet1".

3.  Set Row Number (Start) as 2.

4.  Set Column Number (Start) as A.

5.  Set Row Number (End) as 7.

6.  Set Column Number (End) as D.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot saves the data in the entire table.

 

### Set Range Value

#### Objective
For the Bot to save the data in the table in Google Sheets.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  Sheet Name     Input text that represents the Sheet Name of the Google
  (input)        Sheet file the user wants to check.

  Row Number     Input text that represents the row to insert the data.
  (input)        

  Column Number  Input text that represents the start column to insert
  (input)        the data.

  Value to Set   Input text that represents the data that will be
  (input)        inserted.
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service AND Google Sheet: Get Range Value before
doing this.

First, create this script:

Before: This is the data from Get Range Value.

Before: We need to place the data in a new spreadsheet.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Get Range Value
1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Sheet1".

3.  Set Row Number (Start) as 2.

4.  Set Column Number (Start) as A.

5.  Set Row Number (End) as 7.

6.  Set Column Number (End) as D.

All fields not seen here do not need to be filled.

Set Range Value
1.  Set Spreadsheet ID.

2.  Set Sheet Name" as "Sheet1".

3.  Set Row Number as 2.

4.  Set Column Number as A.

5.  Set Value to Set as \@GoogleSheetRangeResult@

All fields not seen here do not need to be filled.

After: The Bot saves data in the entire table.

### Add New Sheet

#### Objective
For the Bot to add a new Worksheet to the Google Sheet.

You need to complete Google Drive: Initialize Service and Google
Sheet: Initialize Service before doing this.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Spreadsheet ID Input text that represents the ID of the Google Sheet
  (input)        file.

  New Sheet Name Input text that represents the Sheet Name of the Google
  (input)        Sheet file the user wants to check.
  -------------- --------------------------------------------------------

You need to complete Google Drive: Initialize Service AND Google
Sheet: Initialize Service AND Google Sheet: Get Range Value before
doing this.

First, create this script:

Before: We need to add a new Sheet.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

#### Steps


Initialize Service (Google Drive)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Initialize Service (Google Sheet)
1.  Set Google Credentials Path as the file path for the JSON file.

All fields not seen here do not need to be filled.

Add New Sheet
1.  Set Spreadsheet ID.

2.  Set New Sheet Name.

All fields not seen here do not need to be filled.

After: The Bot adds a new Sheet called "Sample".

## Image Command

### Find Image

#### Objective
To confirm that an application is open by scanning for an
image.

#### Table Field
  --------------- --------------------------------------------------------
  Field           Description

  Task Name       Name of the task belong to the group

  Task            Input text that represents the Description to describe
  Description     the task. This is optional.
  (input)         

  Screen Shot     Do not edit or change. Default is \@CroppedImgPath@.
  Path (input)    This is the path where the OrangeBot will save extra
                  screenshots when the OrangeBot runs the task. The path
                  will change according to the user PC/server, but it
                  should resemble:\
                  "C:\\Users\\OrangeFIN\\CroppedImages\\"

  Validate Image  Input text that represents the Screenshot taken using
  Path (input)    the Crop Tool for the OrangeBot to compare with the
                  current PC screen when running.

  Crop Tool       A button to extract location data from a Screenshot.
  (Button)        

  X - Position    This is auto generated by using the Crop Tool
  (input)         function. Input text that represents the starting X
                  Position for the Screenshot.

  Y - Position    This is auto generated by using the Crop Tool
  (input)         function. Input text that represents the starting Y
                  Position for the Screenshot.

  Width (input)   This is auto generated by using the Crop Tool
                  function. Input text that represents the Width
                  (measurement of left to right) of the Screenshot.

  Height (input)  This is auto generated by using the Crop Tool
                  function. Input text that represents the Height
                  (measurement of left to right) of the Screenshot.

  Accepted        Input text that represents the % similarity to the
  Similarity      screenshot of the PC screen. The OrangeBot will check if
  (0.00-1.00)     the PC screen matches the screenshot with a chosen
  (input)         minimum % of similarity. The default is 0.9, which means
                  it must be at least 90% similar. It is not recommended
                  to use 1.0, as the PC screen is unlikely to be 100%
                  similar to the screenshot taken.

  Find Duration   Input text that represents the total amount of seconds
  (second)        the OrangeBot will take to check if the PC screen
  (input)         matches the screenshot taken. If it is set as 5, it will
                  take a maximum of 5 seconds to check.

  Interval        Input text that represents the time taken to wait before
  (millisecond)   going to the next task. For example, if the user sets it
  (input)         as 1000 milliseconds, it will wait 1 second before
                  moving to the next task.
  --------------- --------------------------------------------------------


Make sure to set the last task as Toggle Breakpoint.

Before: We need to confirm that the application is open on screen.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A "Get Image" Window appears.

Open Teamviewer.

Open the "Get Image" window and click "Get Image".

Go back to OrangeWorkforce. The screenshot appears here. Click "Draw".

Click, hold and draw a box around the Teamviewer Logo.

Click Crop Image. It should download a picture.

Click Close.

Go to Downloads, click the image, and copy the path.

#### Steps


1.  Set Validate Image Path

2.  X & Y Position are automatically generated.

3.  Width & Height are automatically generated.

4.  Set Accepted Similarity as 0.90 (90%).

5.  Set Find Duration as 5 (5 seconds).

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has found the Teamviewer logo,
and so has confirmed that the Teamviewer application on screen.
 

### Print Screen

#### Objective
To capture the image of the current screen.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Path To Save   Input text that represents the path of the saved image.
  (input)        
  -------------- --------------------------------------------------------

Before: We need to capture and save an image of the Teamviewer
application.

We need to save the image in the New Folder.

#### Steps


1.  Set Path to Save as the file path of the New Folder and make sure to
    put the name of the picture with ".png" at the end.

All fields not seen here do not need to be filled

After: Result shows that the OrangeBot has saved the image of the
Teamviewer under the name "test".

 

### Crop Screen

#### Objective
To crop an image.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Path To Save   Input text that represents the path of the saved image
  (input)        after cropping.

  Crop Tool      A button to extract location data from a Screenshot.
  (Button)       

  Start Position This is auto generated by using the Crop Tool
  X (input)      function. Input text that represents the starting X
                 Position for the Screenshot.

  Start Position This is auto generated by using the Crop Tool
  Y (input)      function. Input text that represents the starting Y
                 Position for the Screenshot.

  Width (input)  This is auto generated by using the Crop Tool
                 function. Input text that represents the Width
                 (measurement of left to right) of the Screenshot.

  Height (input) This is auto generated by using the Crop Tool
                 function. Input text that represents the Height
                 (measurement of left to right) of the Screenshot.
  -------------- --------------------------------------------------------

Before: We need to crop this image.

You need to paste the image in Paint.

Click Select.

Click, Draw a box around the Teamviewer logo. CLICK AND HOLD.

You should see the X and Y locations, together with the Width and
Height.

Make sure to click and hold and do both at the same time.

#### Steps


1.  Set Path to Save as the file path of the image.

2.  Set Start Position X.

3.  Set Start Position Y.

4.  Set Width.

5.  Set Height.

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot has cropped the image of
Teamviewer.

### Rotate Image

#### Objective
To rotate an image.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Image Path  | The path of the image file to rotate.                  |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Rotation    | This Dropdown List allows the user to rotate the image |
| (Clockwise) | by:                                                    |
| (Dropdown   |                                                        |
| List)       | a)  90°                                                |
|             |                                                        |
|             | b)  180°                                               |
|             |                                                        |
|             | c)  270°                                               |
+-------------+--------------------------------------------------------+

### Rotate 90°

#### Objective
To rotate an image 90°.

Before: We need to rotate this image 90°.

#### Steps


1.  Set Path to Save as the file path of the image.

2.  Set Rotation (Clockwise) as 90.

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot has rotated the image 90°.

 

### Rotate 180°

#### Objective
To rotate an image 180°.

Before: We need to rotate this image 180°.

#### Steps


1.  Set Path to Save as the file path of the image.

2.  Set Rotation (Clockwise) as 180.

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot has rotated the image 180°.

 

### Rotate 270°

#### Objective
To rotate an image 270°.

Before: We need rotate this image 180°.

#### Steps


1.  Set Path to Save as the file path of the image.

2.  Set Rotation (Clockwise) as 270.

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot has rotated the image 270°.

## Job Control Command

### Rerun This Job

#### Objective
To rerun the Job.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        
  -------------- --------------------------------------------------------

#### Steps


1.  Set Task Order & Description

All fields not seen here do not need to be filled.

Click Publish Job.

Go to Job Studio Designer.

1.  Set Application Name

2.  Set Bot Name

3.  Set Job Name

4.  Set Schedule Type

5.  Set Start Time

6.  Set End Time

7.  Set Execute Time

Open the OrangeBot.

Enter the ID & Password and click Login.

Click View, and click Home Page.

Click Play for both the OrangeFIN Schedule & Bot Agent.

After: The Bot reruns the Job over and over again during the set start
to end time.

 

### Run Next Job

#### Objective
To run another Job.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Application    Input text that represents the Application Name. Get
  Name (input)   from Job Info.

  Job Name       Input text that represents the name of the next Job to
  (input)        run.
  -------------- --------------------------------------------------------

Before: This is the Job (Success) we need to run.

Click Job Info.

Copy the Application Name.

Click Publish Job.

#### Steps


1.  Set Application Name (refer to Application Profile)

2.  Set Job Name as the Job you want to run.

All fields not seen here do not need to be filled.

Click Publish Job.

Go to Job Studio Designer.

Click Publish Job.

1.  Set Application Name

2.  Set Bot Name

3.  Set Job Name

4.  Set Schedule Type

5.  Set Start Time

6.  Set End Time

7.  Set Execute Time

Open the OrangeBot.

Enter the ID & Password and click Login.

Click View, and click Home Page.

Click Play for both the OrangeFIN Schedule & Bot Agent.

After: The Bot runs the "Success" Job after running the "Job Control
Testing" Job.

 

### End This Job

#### Objective
To end the Job.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        
  -------------- --------------------------------------------------------

#### Steps


1.  Set Task Order & Description

All fields not seen here do not need to be filled.

Click Publish Job.

Go to Job Studio Designer.

1.  Set Application Name

2.  Set Bot Name

3.  Set Job Name

4.  Set Schedule Type

5.  Set Start Time

6.  Set End Time

7.  Set Execute Time

Open the OrangeBot.

Enter the ID & Password and click Login.

Click View, and click Home Page.

Click Play for both the OrangeFIN Schedule & Bot Agent.

After: The Bot ends the Job.

## Keyboard Command

### Send Special Key

#### Objective
To click on the keyboard. In this example, the user will
click CTRL + SHIFT + ESC to open the Task Manager.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Key 1 (input)  Input text that represents the first key on the keyboard
                 the user wants to click.

  Key 2 (input)  This is optional. Input text that represents the
                 second key on the keyboard the user wants to click.

  Key 3 (input)  This is optional. Input text that represents the
                 third key on the keyboard the user wants to click.
  -------------- --------------------------------------------------------

### Keyboard Shortcuts

1.  CTRL + A:Select All

2.  CTRL + C:Copy

3.  CTRL + X:Cut

4.  CTRL + V: Paste

5.  CTRL + Z: Undo

6.  CTRL + Y: Redo

7.  CTRL + B: Bold

8.  CTRL + U: Underline

9.  CTRL + I: Italic

10. CTRL + S: Save

11. F1: Help

12. F2: Rename selected object

13. F3: Search files

14. F4:Opens file list drop-down in dialogs

15. F5: Refresh current window

16. F6: Shifts focus in Windows Explorer

17. F10: Activates menu bar options

18. ALT + TAB: Cycles between open applications

19. ALT + F4: Quit program, close current window

20. ALT + F6: Switch between current program windows

21. ALT + ENTER: Opens properties dialog

22. ALT + SPACE: System menu for current window

23. BACKSPACE: Switch to parent folder

24. CTRL + ESC: Opens Start menu

25. CTRL + ALT + DEL: Opens task manager, reboots the computer

26. CTRL + TAB: Move through property tabs

27. ESC: Cancel last function

28. SHIFT: Press/hold SHIFT

29. SHIFT + F10: Opens context menu (same as right-click)

30. SHIFT + DELETE:Full wipe delete (bypasses Recycle Bin)

31. PAGE UP: moves document or dialog box up one page

32. PAGE DOWN: moves document or dialog down one page

33. WINDOWS + UP: Maximise window

34. WINDOWS + DOWN: Minimise window

35. WINDOWS + D: Display the desktop

36. WINDOWS + L: Lock PC

37. WINDOWS + SHIFT + ESC: Task Manager

#### Steps


1.  Set Key 1.

2.  Set Key 2 (optional).

3.  Set Key 3 (optional).

All fields not seen here do not need to be filled.

After: The Bot opens the Task Manager.

### Send Text

#### Objective
To type "123".

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Test to Send   Input text that represents the text that the OrangeBot
  (Input)        will manually type into the PC.
  -------------- --------------------------------------------------------

First, create this script:

#### Steps


Send Special Key
1.  Set Key 1.

All fields not seen here do not need to be filled.

Send Text
1.  Set Text to Send as "123".

All fields not seen here do not need to be filled.

After: The Bot types "123".

 

## Mathematic Command

### Add

#### Objective
To add two numbers together.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Number 1       Input text that represents the first number.
  (input)        

  Number 2       Input text that represents the second number to be
  (input)        added.

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps


1.  Set Number 1 as 1

2.  Set Number 2 as 1

3.  Set Gvariable To Store Result

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot calculates 1 + 1 to get the number 2.
 

### Minus

#### Objective
To deduct one number from another.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Number 1       Input text that represents the first number.
  (input)        

  Number 2       Input text that represents the second number to be
  (input)        deducted.

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps



1.  Set Number 1 as 4

2.  Set Number 2 as 3

3.  Set Gvariable To Store Result

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot calculates 4 - 3 to get the number 1.

 

### Multiply

#### Objective
To multiply two numbers together.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Number 1       Input text that represents the first number.
  (input)        

  Number 2       Input text that represents the second number to be
  (input)        multiplied

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps

:

1.  Set Number 1 as 6

2.  Set Number 2 as 5

3.  Set Gvariable To Store Result

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot calculates 6x5 to get the number 30.

 

### Divide

#### Objective
To divide one number with another number.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Number 1       Input text that represents the first number.
  (input)        

  Number 2       Input text that represents the second number to be
  (input)        divided.

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps


1.  Set Number 1 as 28

2.  Set Number 2 as 7

3.  Set Gvariable To Store Result

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot calculates 28/7 to get the number 4.

 

### Module

#### Objective
The modulus is another name for the remainder after division.
For example for 61 mod 17, we calculate like this:\
61/17 = 3 (Rounded up)\
17 x 3 = 51\
61 - 51 = 10\
10 is the remainder so,\
61 mod 17 = 10

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Number 1       Input text that represents the first number.
  (input)        

  Number 2       Input text that represents the second number that
  (input)        represents the module.

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps

:

1.  Set Number 1 as 61

2.  Set Number 2 as 17

3.  Set Gvariable To Store Result

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot calculates 61 mod 17 to get the number 10.



### Date Calculation

#### Objective
To calculate a date based on specific methods (previous
month, next year, the day before, etc.).

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Source Date | Input text that represents the first date chosen by    |
| (input)     | the user. It must be written according to the source   |
|             | format.                                                |
+-------------+--------------------------------------------------------+
| Source      | Input text that represents the date format of the      |
| Format      | input date chosen by the user. The user may use the    |
| (input)     | following formats:                                     |
|             |                                                        |
|             | a)  yyyyMMdd - 20251108                                |
|             |                                                        |
|             | b)  dd-MM-yyyy - 08-11-2025                            |
|             |                                                        |
|             | c)  dd/MM/yyyy - 08/11/2025                            |
|             |                                                        |
|             | d)  dd - 08                                            |
|             |                                                        |
|             | e)  MM - 11                                            |
|             |                                                        |
|             | f)  MMM - Nov                                          |
|             |                                                        |
|             | g)  MMMM - November                                    |
|             |                                                        |
|             | h)  yyyy - 2025                                        |
|             |                                                        |
|             | i)  yy - 25                                            |
+-------------+--------------------------------------------------------+
| Action Mode | This Dropdown List allows the user to make a           |
| (Dropdown   | calculation of the date based on:                      |
| List)       |                                                        |
|             | a)  Adds Month: Increases the date based on a chosen   |
|             |     number of months ahead.                            |
|             |                                                        |
|             | b)  Adds Year: Increases the date based on a chosen    |
|             |     number of years ahead.                             |
|             |                                                        |
|             | c)  Minus Day: Decreases the date based on a chosen    |
|             |     number of days before.                             |
|             |                                                        |
|             | d)  Minus Month: Decreases the date based on a chosen  |
|             |     number of months before.                           |
|             |                                                        |
|             | e)  Minus Year: Decreases the date based on a chosen   |
|             |     number of years before.                            |
|             |                                                        |
|             | f)  Get First Day of Month: Automatically retrieves    |
|             |     the first day of the month.                        |
|             |                                                        |
|             | g)  Get Last Day of Month: Automatically retrieves the |
|             |     last day of the month.                             |
+-------------+--------------------------------------------------------+
| Param       | This must be filled for any Add or Minus mode. |
| (input)     | Input text that represents the number of               |
|             | days/months/years to be added or subtracted.           |
|             |                                                        |
|             | For example, if the Source date is "14/8/2025" set as  |
|             | "Minus Month" and the Param is set as "3", it will     |
|             | decrease the date by 3 months and the result will be   |
|             | "14/5/2025".                                           |
+-------------+--------------------------------------------------------+
| Output      | Input text that represents the date format of the      |
| Format      | output date. The user may use the following formats:   |
| (input)     |                                                        |
|             | a)  yyyyMMdd - 20251108                                |
|             |                                                        |
|             | b)  dd-MM-yyyy - 08-11-2025                            |
|             |                                                        |
|             | c)  dd/MM/yyyy - 08/11/2025                            |
|             |                                                        |
|             | d)  dd - 08                                            |
|             |                                                        |
|             | e)  MM - 11                                            |
|             |                                                        |
|             | f)  MMM - Nov                                          |
|             |                                                        |
|             | g)  MMMM - November                                    |
|             |                                                        |
|             | h)  yyyy - 2025                                        |
|             |                                                        |
|             | i)  yy - 25                                            |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### Adds Day

#### Objective
To get the date for the next day after the 21st of February
2023.

Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps


1.  Set the Source Date (in format yyyyMMdd)

2.  Set Source Format as yyyyMMdd

3.  Set Action Mode as Adds Day

4.  Set Param as 1

5.  Set Output Format as yyyy-MM-dd

6.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot gets the date for the 22nd of February 2023 in the format
yyyy-MM-dd.

 

### Adds Month

#### Objective
To get the name of the Month for 2 months later after the
21st of February 2023.


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps



1.  Set the Source Date (in format yyyyMMdd)

2.  Set Source Format as yyyyMMdd

3.  Set Action Mode as Adds Month

4.  Set Param as 1

5.  Set Output Format as MMM

6.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot gets the month of April in the format MMM.

 

### Adds Year

#### Objective
To get the Year for 3 years later after the 21st of February
2023.

Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps


1.  Set the Source Date (in format yyyyMMdd)

2.  Set Source Format as yyyyMMdd

3.  Set Action Mode as Adds Year

4.  Set Param as 3

5.  Set Output Format as yyyy

6.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot gets the year 2026 in the format yyyy.

 

### Minus Day

#### Objective
To get the date before the 21st of February 2023.

Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps


1.  Set the Source Date (in format yyyyMMdd)

2.  Set Source Format as yyyyMMdd

3.  Set Action Mode as Minus Day

4.  Set Param as 1

5.  Set Output Format as yyyy-MM-dd

6.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot gets the date for the 20th of February 2023 in the format
yyyy-MM-dd.

 

### Minus Month

#### Objective
To get the name of the Month for 2 months before the 21st of
February 2023.


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps


1.  Set the Source Date (in format yyyyMMdd)

2.  Set Source Format as yyyyMMdd

3.  Set Action Mode as Minus Month

4.  Set Param as 2

5.  Set Output Format as MMM

6.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot gets the month of December in the format MMM.

 

### Minus Year

#### Objective
To get the Year for 3 years before the 21st of February 2023.


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps


1.  Set the Source Date (in format yyyyMMdd)

2.  Set Source Format as yyyyMMdd

3.  Set Action Mode as Minus Year

4.  Set Param as 3

5.  Set Output Format as yyyy

6.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot gets the year 2020 in the format yyyy.

 

### Get First Day of Month

#### Objective
To get the first day of the month of February.


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps



1.  Set the Source Date (in format yyyyMMdd)

2.  Set Source Format as yyyyMMdd

3.  Set Action Mode as Get First Day of Month

4.  Set Output Format as yyyy-MM-dd

5.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot gets the date for the 1st of February 2023 in the format
yyyy-MM-dd.

 

### Get Last Day of Month

#### Objective
To get the first day of the month of February.


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps



1.  Set the Source Date (in format yyyyMMdd)

2.  Set Source Format as yyyyMMdd

3.  Set Action Mode as Get Last Day of Month

4.  Set Output Format as yyyy-MM-dd

5.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot gets the date for the 28th of February 2023 in the format
yyyy-MM-dd.

 

### Round Up

#### Objective
To round up a number.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Number to      Input text that represents the number to be rounded up.
  Round Up       
  (input)        

  Round Up       Input text that represents the number of decimals for
  Decimal        the final result. Leave 0 for Whole Numbers.
  (input)        

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------

### Decimal

#### Objective
To round up a number up to 2 decimals.


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps


1.  Set the Number to Round Up

2.  Set Round Up Decimal as 2

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot rounds up the number to 776.66.

 

### Whole Numbers

#### Objective
To round up a number up in 100s.


Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

#### Steps


1.  Set the Number to Round Up

2.  Set Round Up Decimal as 2

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot rounds up the number to 800.

## Mouse Command

### Mouse Select Range

#### Objective
To highlight a table in Excel using the mouse.

Make sure to always allow pop-ups from
https://orangeworkforce.orangefinasia.com/.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Crop Tool      A button to extract location data from a Screenshot.
  (Button)       

  Start          This is auto generated by using the Crop Tool
  Position-X     function. Input text that represents the starting X
  (input)        Position for the Screenshot.

  Start          This is auto generated by using the Crop Tool
  Position-Y     function. Input text that represents the starting Y
  (input)        Position for the Screenshot.

  Width (input)  This is auto generated by using the Crop Tool
                 function. Input text that represents the Width
                 (measurement of left to right) of the Screenshot.

  Height (input) This is auto generated by using the Crop Tool
                 function. Input text that represents the Height
                 (measurement of left to right) of the Screenshot.
  -------------- --------------------------------------------------------

Before: We need to the Bot to highlight this table using the mouse.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A "Get Image" Window appears.

Open the Excel file in full screen.

Open the "Get Image" window and click "Get Image".

Go back to OrangeWorkforce. The screenshot appears here. Click "Draw".

The screenshot should be in the OrangeWorkforce. Click, hold and draw a
box from the first cell to the last cell of the table.

Click Crop Image.

Click Close.

#### Steps


1.  X & Y Position are automatically filled.

2.  Width & Height are automatically filled.

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot uses the mouse to highlight the
entire table.

 

### Mouse Click

#### Objective
To do a mouse click.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Crop Tool   | A button to extract location data from a Screenshot.   |
| (Button)    |                                                        |
+-------------+--------------------------------------------------------+
| Position-X  | This is auto generated by using the Crop Tool      |
| (input)     | function. The starting X Position for the Screenshot.  |
+-------------+--------------------------------------------------------+
| Position-Y  | This is auto generated by using the Crop Tool      |
| (input)     | function. The starting Y Position for the Screenshot.  |
+-------------+--------------------------------------------------------+
| Mouse Event | This allows the user to do a:                          |
| (Dropdown   |                                                        |
| List)       | a)  Left Click                                         |
|             |                                                        |
|             | b)  Right Click                                        |
|             |                                                        |
|             | c)  Double Left Click                                  |
|             |                                                        |
|             | d)  Double Right Click                                 |
+-------------+--------------------------------------------------------+

### Left Click

#### Objective
To click E5 in an Excel file.

Make sure to always allow pop-ups from
https://orangeworkforce.orangefinasia.com/.

Before: We need to the Bot to click E5.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A "Get Image" Window appears.

Open the Excel file in full screen.

Open the "Get Image" window and click "Get Image".

Go back to OrangeWorkforce. The screenshot appears here. Click "Draw".

Go back to OrangeWorkforce. The screenshot should be in the
OrangeWorkforce. Double Click E5.

Click Get Value.

Click Close.

#### Steps


1.  X & Y Position are automatically filled.

2.  Set Mouse Event as Left Click.

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot uses the mouse to click E5.

 

### Right Click

#### Objective
To right click E5 in an Excel file.

Make sure to always allow pop-ups from
https://orangeworkforce.orangefinasia.com/.

Before: We need to the Bot to click E5.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A "Get Image" Window appears.

Open the Excel file in full screen.

Open the "Get Image" window and click "Get Image".

Go back to OrangeWorkforce. The screenshot appears here. Click "Draw".

Go back to OrangeWorkforce. The screenshot should be in the
OrangeWorkforce. Double Click E5.

Click Get Value.

Click Close.

#### Steps


1.  X & Y Position are automatically filled.

2.  Set Mouse Event as Right Click.

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot uses the mouse to right click E5.

 

### Double Left Click

#### Objective
To open Teamviewer by double clicking.

Make sure to always allow pop-ups from
https://orangeworkforce.orangefinasia.com/.

Before: We need to the Bot to double click the Teamviewer icon to open
it.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A "Get Image" Window appears.

Open the "Get Image" window and click "Get Image".

Go back to OrangeWorkforce. The screenshot appears here. Click "Draw".

Go back to OrangeWorkforce. The screenshot should be in the
OrangeWorkforce. Double Click the Teamviewer icon in the screenshot.

Click Get Value.

Click Close.

#### Steps


1.  X & Y Position are automatically filled.

2.  Set Mouse Event as Double Left Click.

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot uses the mouse to double click
the Teamviewer icon and open the Teamviewer application.

 

### Double Right Click

#### Objective
To double right click the Teamviewer icon.

Make sure to always allow pop-ups from
https://orangeworkforce.orangefinasia.com/.

Before: We need to the Bot to double right click the Teamviewer icon.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A "Get Image" Window appears.

Open the "Get Image" window and click "Get Image".

Go back to OrangeWorkforce. The screenshot appears here. Click "Draw".

Go back to OrangeWorkforce. The screenshot should be in the
OrangeWorkforce. Double Click the Teamviewer icon in the screenshot.

Click Get Value.

Click Close.

#### Steps


1.  X & Y Position are automatically filled.

2.  Set Mouse Event as Double Left Click.

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot uses the mouse to double right
click the Teamviewer icon.

 

### Mouse Scroll

#### Objective
To scroll up/down.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Position    | Input text that represents the starting X and Y        |
| (x,y)       | Position for the Screenshot. Use Mouse Click to    |
| (input)     | get the position.                                      |
+-------------+--------------------------------------------------------+
| Scroll      | This allows the user to scroll                         |
| Direction   |                                                        |
|             | a)  Up                                                 |
|             |                                                        |
|             | b)  Down                                               |
+-------------+--------------------------------------------------------+
| Scroll      | Input text that represents how many times the          |
| Count       | OrangeBot will scroll up/down. If it is set as "2", it |
| (input)     | will scroll 2 times.                                   |
+-------------+--------------------------------------------------------+
| Delay Time  | Leave blank if not needed. Input text that represents  |
| (ms)        | the delay between each scroll. For example, setting    |
| (input)     | "10" will have the OrangeBot wait 10 milliseconds      |
|             | between each scroll.                                   |
+-------------+--------------------------------------------------------+

### Up

#### Objective
To scroll up.

Before: We need the Bot to scroll up.

#### Steps


1.  Set X and Y Position.

2.  Set Scroll Direction as Up.

3.  Set Scroll Count as 100.

All fields not seen here do not need to be filled.

After: Results show that the Bot has scrolled up to see the whole table.

 

### Down

#### Objective
To scroll down.

Before: We need the Bot to scroll down.

#### Steps


1.  Set X and Y Position.

2.  Set Scroll Direction as Down.

3.  Set Scroll Count as 100.

All fields not seen here do not need to be filled.

After: Results show that the Bot has scrolled down.
 

### Mouse Move to

#### Objective
To hover the mouse point over a specific point on your
screen.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Move to        Input text that represents the X and Y Position for the
  Position (x,y) OrangeBot to hover above. Use Mouse Click to get the
  (input)        position.

  Delay (ms)     Leave blank if not needed. Input text that represents
  (input)        the delay before the mouse moves to another point. For
                 example, setting "10" will have the OrangeBot wait 10
                 milliseconds before moving to the set position.
  -------------- --------------------------------------------------------

First, create this script:

 You need to complete Mouse Click to get the X & Y Location.

Before: We need the Bot to hover over \"Free ebooks\" to drop down the
list.

#### Steps


Mouse Click
1.  Use Crop tool to get X & Y Position.

2.  Set Mouse Event as Left Click.

All fields not seen here do not need to be filled.

Mouse Move To
1.  Set Move to Position (x,y).

All fields not seen here do not need to be filled.

After: Results show that the Bot has hovered over \"Free Ebook\" and the
list drops down.

 

### Mouse Drag and Drop

#### Objective
To drag with your mouse and drop to another point.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Start Position Input text that represents the starting X and Y
  (x,y) (input)  Position. Use Mouse Click to get the position.

  End Position   Input text that represents the ending X and Y Position.
  (x,y) (input)  Use Mouse Click to get the position.

  Delay (ms)     Leave blank if not needed. Input text that represents
  (input)        the delay before the mouse moves to another point. For
                 example, setting "10" will have the OrangeBot wait 10
                 milliseconds before moving to the set position.
  -------------- --------------------------------------------------------

 You need to complete Mouse Click to get the X & Y Location.

Before: We need the Bot to drag \"High Taras\" to \"Trash\".

#### Steps


Mouse Click
1.  Use Crop tool to get X & Y Position.

2.  Set Mouse Event as Left Click.

All fields not seen here do not need to be filled.

Mouse Click
1.  Use Crop tool to get X & Y Position.

2.  Set Mouse Event as Left Click.

All fields not seen here do not need to be filled.

Mouse Drag and Drop
1.  Set Start Position.

2.  Set End Position.

All fields not seen here do not need to be filled.

After: Results show that the Bot has dragged \"High Taras\" to
\"Trash\".

## Microsoft Excel Command

### Open Excel

#### Objective
To search for a value in an Excel worksheet.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | Input text that represents the path of the Excel file. |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Visible     | This Dropdown List allows the user to set if the Excel |
| (Dropdown   | file will be visible on screen or not.                 |
| List)       |                                                        |
+-------------+--------------------------------------------------------+
| Update      | Input text that represents Yes or No.                  |
| Formula ?   |                                                        |
| (input)     | If Yes, it will update all the formulas in the     |
|             | Excel file.                                            |
+-------------+--------------------------------------------------------+

#### Objective
To open an Excel file.
Before: This is the Excel file that needs to be opened.

#### Steps


1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

After: the Excel file is open.

### Search Cell

#### Objective
To search for a value in an Excel worksheet.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | Input text that represents the path of the Excel file. |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Sheet Name  | Input text that represents the Sheet Name of the Excel |
| (input)     | file.                                                  |
+-------------+--------------------------------------------------------+
| Row Start   | Input text that represents the start row of the Range  |
| (input)     | to be searched (e.g. "1","2",etc.)                     |
+-------------+--------------------------------------------------------+
| Column      | Input text that represents the start column of the     |
| Start       | Range to be searched (e.g. "A" or "1", "B" or          |
| (input)     | "2",etc.)                                              |
+-------------+--------------------------------------------------------+
| Row End     | Input text that represents the end row of the Range to |
| (input)     | be searched (e.g. "100","200",etc.)                    |
+-------------+--------------------------------------------------------+
| Column End  | Input text that represents the end column of the Range |
| (input)     | to be searched (e.g. "Y" or "25", "Z" or "26",etc.)    |
+-------------+--------------------------------------------------------+
| Value to    | Input text that represents the text data that will be  |
| Search      | searched in the Google Sheet file (e.g. 123)           |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Search Mode | Recommended default is Range.                      |
|             |                                                        |
|             | This allows the user to search the Excel by            |
|             |                                                        |
|             | d)  Row: Search through rows.                          |
|             |                                                        |
|             | e)  Column: Search through columns.                    |
|             |                                                        |
|             | f)  Range: Search through rows and columns.            |
+-------------+--------------------------------------------------------+
| Condition   | This Dropdown List allows the user to search cells     |
| Type        | with a specified value (e.g. 123) by:                  |
| (Dropdown   |                                                        |
| List)       | c)  Exactly: Is exactly the same as all the data in    |
|             |     the cell. For example, if the searched value is    |
|             |     "123" and the value in the cell is also exactly    |
|             |     "123", it will be marked as true.              |
|             |                                                        |
|             | d)  Contains: Is a partial match with the data in the  |
|             |     cell. For example, if the searched value is "1"    |
|             |     and the value in the cell is "123", it will be     |
|             |     marked as true.                                |
+-------------+--------------------------------------------------------+
| Case        | Input text that represents Yes or No.                  |
| Sensitivity |                                                        |
| (input)     | The default setting recommended is No.             |
|             |                                                        |
|             | This allows the user to choose if the comparison needs |
|             | to take into account whether the uppercase or          |
|             | lowercase letters match.                               |
|             |                                                        |
|             | For example, if the user sets Case Sensitive as        |
|             | Yes:                                               |
|             |                                                        |
|             | Value Source: Mode                                 |
|             |                                                        |
|             | Value to Compare: mode                             |
|             |                                                        |
|             | The result of the comparison will be N (No). The   |
|             | capital "M" does not match.                        |
|             |                                                        |
|             | But if the user sets Case Sensitive as No.         |
|             |                                                        |
|             | Value Source: Mode                                 |
|             |                                                        |
|             | Value to Compare: mode                             |
|             |                                                        |
|             | The result of the comparison will be Y(Yes). It    |
|             | will not matter if the capital "M" does not match, |
|             | as long as the words remain the same.                  |
+-------------+--------------------------------------------------------+

### Search Cell: By Column

#### Objective
To search for "Johor" in worksheet using Search Cell: Column;
where data will be tracked horizontally, column by column. The end
result will show the row where "Johor" is located.\
You need to set an Open Excel before doing this.

Make sure to set the last task as Toggle Breakpoint.

Before: All information stored in Excel sheet.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Search Cell
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Column Number (Start)

4.  Set Column Number (End).

5.  Set Value to Search with the data the user want to search.

6.  Set Search Mode to "Column" so it will search for the data using
    column.

7.  Set Condition Type.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that "Johor" is only stored in one row which is in
Row 5.

### Search Cell: By Row

#### Objective
To search for "Deaths" in worksheet using Search Cell: Row;
where data will be tracked vertically, row by row. The end result will
show the column "Deaths" is located.\
You need to set an Open Excel before doing this.

Make sure to set the last task as Toggle Breakpoint.

Before: All information stored in Excel sheet.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Search Cell
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Row Number (Start)

4.  Set Row Number (End).

5.  Set Value to Search with the data the user want to search.

6.  Set Search Mode to "Row" so it will search for the data using row.

7.  Set Condition Type.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that "Deaths" is only stored in one column which is
Column 4.

 

### Search Cell (Range)

#### Objective
To search for empty cells in the whole worksheet using Search
Cell: Range.\
You need to set an Open Excel before doing this.

Make sure to set the last task as Toggle Breakpoint.

Before: The OrangeBot needs to search for all the empty cells in the
Excel sheet in order to check which data is missing. This gives us the
first step

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Search Cell
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Row Number (Start)

4.  Set Row Number (End).

5.  Set Column Number (Start).

6.  Set Column Number (End).

7.  Set Search Mode to "Range" so it will search for the data using
    range.

8.  Set Condition Type.

All fields not seen here do not need to be filled.

After: Result shows that there are 6 empty cells in the sheet. The first
empty cell found in the row is located in Row 3. While the first empty
cell found in the column is located in Column 5.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that there are 6 empty cells in the sheet. The first
empty cell found in the row is located in Row 3. While the first empty
cell found in the column is located in Column 5.

### Get Row Value

#### Objective
To save all information from an entire row.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | Input text that represents the path of the Excel file. |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Worksheet   | Input text that represents the Sheet Name of the Excel |
| (Name/No.)  | file.                                                  |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Row Number  | Input text that represents the Row Number.             |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Column      | Input text that represents the start column (e.g. "A"  |
| Number      | or "1", "B" or "2",etc.)                               |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Column End  | Input text that represents the end column (e.g. "Y" or |
| (input)     | "25", "Z" or "26",etc.)                                |
+-------------+--------------------------------------------------------+
| Action Mode | Recommended default is Normal Mode.                |
| (Dropdown   |                                                        |
| List)       | The Modes in the Dropdown List are:                    |
|             |                                                        |
|             | a)  Normal Mode                                        |
|             |                                                        |
|             | b)  Fast Mode - Same as Normal Mode, but done faster   |
|             |                                                        |
|             | c)  Exclude Hidden - If the Excel is filtered, it will |
|             |     not extract the data that is filtered out.         |
|             |                                                        |
|             | d)  Exclude Hidden (Fast) - If the Excel is filtered,  |
|             |     it will not extract the data that is filtered out. |
|             |     This is done faster.                               |
+-------------+--------------------------------------------------------+
| Result Type | Recommended default is Value.                      |
| (Dropdown   |                                                        |
| List)       | The format of the result. It can be:                   |
|             |                                                        |
|             | a)  Value - String Format                              |
|             |                                                        |
|             | b)  Value (Accounting) - Numbers                       |
|             |                                                        |
|             | c)  Value (Default Date) - Result will be a date.      |
+-------------+--------------------------------------------------------+

Before: The OrangeBot needs to extract the data from this row.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Get Row Value
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Row Number.

4.  Set Column Number (Start).

5.  Set Column Number (End).

6.  Set Action Mode.

7.  The OrangeBot will retrieve the data in Row 2 from column A until E
    of the Excel sheet and save the information in \@ExcelRowResult@.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The data from Row 2 is saved.

### Set Row Value

#### Objective
To insert a Row of data into an Excel file.\
You need to complete Get Row Value before doing this.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | Input text that represents the path of the Excel file. |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Worksheet   | Input text that represents the Sheet Name of the Excel |
| (Name/No.)  | file.                                                  |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Row Number  | Input text that represents the Row Number              |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Column      | Input text that represents the column number (e.g. "A" |
| Number      | or "1", "B" or "2",etc.)                               |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Value to    | Input text that represents the data that will be       |
| Set (input) | inserted.                                              |
+-------------+--------------------------------------------------------+
| Value       | Recommended default is Auto.                       |
| Format      |                                                        |
| (Dropdown   | The Dropdown List includes the format of the data that |
| List)       | will be inserted, including:                           |
|             |                                                        |
|             | a)  Auto - Text & Numbers                              |
|             |                                                        |
|             | b)  Number                                             |
|             |                                                        |
|             | c)  Text                                               |
+-------------+--------------------------------------------------------+

First, create this script:

Before: No data stored in Row 19.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Get Row Value
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Row Number.

4.  Set Column Number (Start).

5.  Set Column Number (End).

6.  Set Action Mode.

7.  The OrangeBot will retrieve the data in Row 2 from column A until E
    of the Excel sheet and save the information in \@ExcelRowResult@.

Set Row Value
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Row Number.

4.  Set Column Number.

5.  Set Value to Set.

All fields not seen here do not need to be filled.

After: Data taken from \@ExcelRowResult@ stored in Row 19.

### Get Column Value

#### Objective
To save the information in an entire column.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | The path of the Excel file.                            |
+-------------+--------------------------------------------------------+
| Worksheet   | The Sheet Name of the Excel file.                      |
| (Name/No.)  |                                                        |
+-------------+--------------------------------------------------------+
| Row Number  | The start row number.                                  |
+-------------+--------------------------------------------------------+
| Row End     | The end row number.                                    |
+-------------+--------------------------------------------------------+
| Column      | The column no (e.g. "A" or "1", "B" or "2",etc.)       |
| Number      |                                                        |
+-------------+--------------------------------------------------------+
| Action Mode | Recommended default is Normal Mode.                |
|             |                                                        |
|             | The Modes are:                                         |
|             |                                                        |
|             | e)  Normal Mode                                        |
|             |                                                        |
|             | f)  Fast Mode - Same as Normal Mode, but done faster   |
|             |                                                        |
|             | g)  Exclude Hidden - If the Excel is filtered, it will |
|             |     not extract the data that is filtered out.         |
|             |                                                        |
|             | h)  Exclude Hidden (Fast) - If the Excel is filtered,  |
|             |     it will not extract the data that is filtered out. |
|             |     This is done faster.                               |
+-------------+--------------------------------------------------------+
| Result Type | Recommended default is Value.                      |
|             |                                                        |
|             | The format of the result. It can be:                   |
|             |                                                        |
|             | d)  Value - String Format                              |
|             |                                                        |
|             | e)  Value (Accounting) - Numbers                       |
|             |                                                        |
|             | f)  Value (Default Date) - Result will be a date.      |
+-------------+--------------------------------------------------------+


Make sure to set the last task as Toggle Breakpoint.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Get Column Value
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Column Number.

4.  Set Row Number (Start).

5.  Set Row Number (End).

6.  Set Action Mode.

7.  The OrangeBot will retrieve the data from Column A in the Excel file
    and store the information in \@ExcelColResult@.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The OrangeBot saved the result of the column.

### Set Column Value

#### Objective
To insert a column of data into an Excel file.\
You need to complete Get Column Value before doing this.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | The path of the Excel file.                            |
+-------------+--------------------------------------------------------+
| Worksheet   | The Sheet Name of the Excel file.                      |
| (Name/No.)  |                                                        |
+-------------+--------------------------------------------------------+
| Row Number  | The Row Number                                         |
+-------------+--------------------------------------------------------+
| Column      | The column number (e.g. "A" or "1", "B" or "2",etc.)   |
| Number      |                                                        |
+-------------+--------------------------------------------------------+
| Value to    | The data that will be inserted.                        |
| Set         |                                                        |
+-------------+--------------------------------------------------------+
| Value       | Recommended default is Auto.                       |
| Format      |                                                        |
|             | The format of the data that will be inserted,          |
|             | including:                                             |
|             |                                                        |
|             | d)  Auto - Text & Numbers                              |
|             |                                                        |
|             | e)  Number                                             |
|             |                                                        |
|             | f)  Text                                               |
+-------------+--------------------------------------------------------+

First, create this script:

Before: Column H is empty with no data.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Get Column Value
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Column Number.

4.  Set Row Number (Start).

5.  Set Row Number (End).

6.  Set Action Mode.

7.  The OrangeBot will retrieve the data from Column A in the Excel file
    and store the information in \@ExcelColResult@.

All fields not seen here do not need to be filled.

Set Column Value
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Row Number.

4.  Set Column Number.

5.  Set Value to Set.

All fields not seen here do not need to be filled.

After: Column H in the Excel sheet filled with data obtained from
\@ExcelColResult@.

### Get Range Value

#### Objective
To extract data from multiple rows and columns (ie Range).

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | The path of the Excel file.                            |
+-------------+--------------------------------------------------------+
| Worksheet   | The Sheet Name of the Excel file.                      |
| (Name/No.)  |                                                        |
+-------------+--------------------------------------------------------+
| Row Number  | The start row number.                                  |
+-------------+--------------------------------------------------------+
| Row End     | The end row number.                                    |
+-------------+--------------------------------------------------------+
| Column      | The column no (e.g. "A" or "1", "B" or "2",etc.)       |
| Number      |                                                        |
+-------------+--------------------------------------------------------+
| Column End  | The end column no (e.g. "Y" or "25", "Z" or "26",etc.) |
+-------------+--------------------------------------------------------+
| Action Mode | Recommended default is Normal Mode.                |
|             |                                                        |
|             | The Modes are:                                         |
|             |                                                        |
|             | i)  Normal Mode                                        |
|             |                                                        |
|             | j)  Fast Mode - Same as Normal Mode, but done faster   |
|             |                                                        |
|             | k)  Exclude Hidden - If the Excel is filtered, it will |
|             |     not extract the data that is filtered out.         |
|             |                                                        |
|             | l)  Exclude Hidden (Fast) - If the Excel is filtered,  |
|             |     it will not extract the data that is filtered out. |
|             |     This is done faster.                               |
+-------------+--------------------------------------------------------+
| Result Type | Recommended default is Value.                      |
|             |                                                        |
|             | The format of the result. It can be:                   |
|             |                                                        |
|             | g)  Value - String Format                              |
|             |                                                        |
|             | h)  Value (Accounting) - Numbers                       |
|             |                                                        |
|             | i)  Value (Default Date) - Result will be a date.      |
+-------------+--------------------------------------------------------+

\
Make sure to set the last task as Toggle Breakpoint.

Before: The OrangeBot will extract the data.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Get Range Value
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Row Number (Start).

4.  Set Row Number (End).

5.  Set Column Number (Start).

6.  Set Column Number (End).

7.  Set Action Mode.

8.  The OrangeBot will save all data from A1 to E17 in the Excel file
    into global variable \@ExcelRangeResult@.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The OrangeBot has saved the result.

### Set Range Value

#### Objective
To insert a range of data into an Excel file.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | The path of the Excel file.                            |
+-------------+--------------------------------------------------------+
| Worksheet   | The Sheet Name of the Excel file.                      |
| (Name/No.)  |                                                        |
+-------------+--------------------------------------------------------+
| Row Number  | The Row Number                                         |
+-------------+--------------------------------------------------------+
| Column      | The column number (e.g. "A" or "1", "B" or "2",etc.)   |
| Number      |                                                        |
+-------------+--------------------------------------------------------+
| Value to    | The data that will be inserted.                        |
| Set         |                                                        |
+-------------+--------------------------------------------------------+
| Value       | Recommended default is Auto.                       |
| Format      |                                                        |
|             | The format of the data that will be inserted,          |
|             | including:                                             |
|             |                                                        |
|             | g)  Auto - Text & Numbers                              |
|             |                                                        |
|             | h)  Number                                             |
|             |                                                        |
|             | i)  Text                                               |
+-------------+--------------------------------------------------------+

First, create this script:

Before: Excel "Sheet1" is empty.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Get Range Value
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Row Number (Start).

4.  Set Row Number (End).

5.  Set Column Number (Start).

6.  Set Column Number (End).

7.  Set Action Mode.

8.  The OrangeBot will save all data from A1 to E17 in the Excel file
    into global variable \@ExcelRangeResult@.

All fields not seen here do not need to be filled.

Set Range Value
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Row Number.

4.  Set Column Number.

5.  Set Value to Set.

All fields not seen here do not need to be filled.

After: Range data taken from \@ExcelRangeResult@ stored in the worksheet
"Sheet1".

 

### Get Worksheet Info

#### Objective
To identify the last used Column/Row in an Excel Sheet.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | Input text that represents the path of the Excel file. |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Worksheet   | Input text that represents the Sheet Name of the Excel |
| (Name/No.)  | file.                                                  |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Info Type   | Dropdown List Allows the user to search for the:       |
| (Dropdown   |                                                        |
| List)       | a)  Last Row By Sheet - The last used row in the       |
|             |     entire Excel Sheet.                                |
|             |                                                        |
|             | b)  Last Row by Column - The last used row in a chosen |
|             |     column. (e.g. column A)                            |
|             |                                                        |
|             | c)  Last Column By Sheet - The last used column in the |
|             |     entire Excel Sheet.                                |
|             |                                                        |
|             | d)  Last Row by Column - The last used column in a     |
|             |     chosen row. (e.g. row 1)                           |
+-------------+--------------------------------------------------------+
| Row Number  | This must be filled if Info Type is set as Last      |
| (input)     | Column By Row. For example, if Row number input iss  |
|             | "1", the OrangeBot will search for the last used       |
|             | column in Row 1.                                       |
+-------------+--------------------------------------------------------+
| Column      | This must be filled if Info Type is set as Last Row  |
| Number      | By Column. for example, if the Column number input   |
| (input)     | is "A", the OrangeBot will search for the last used    |
|             | row in Column A.                                       |
+-------------+--------------------------------------------------------+

### Search Last Column By Sheet

#### Objective
To identify the last used Column for the entire Sheet.

First, create this script:

Before: All information stored in Excel sheet.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Get Worksheet Info\

1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Info Type to Last Column By Sheet so it will find the last used
    column for the whole sheet.

All fields not seen here do not need to be filled.

Message Box

1.  Set Message to Display.

All fields not seen here do not need to be filled.

After: Result shows that the last column used is Column 7 (Column G).

### Search Last Column By Row

#### Objective
To identify the last used Column for Row 3 using Get
Worksheet Info: Search Last Column by Row.

First, create this script:

Before: All information stored in Excel sheet.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Get Worksheet Info
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Info Type to Last Column By Row so it will find the last used
    column for a selected Row.

4.  Set Row Number.

All fields not seen here do not need to be filled.

Message Box\

1.  Set Message to Display.

All fields not seen here do not need to be filled.

After: Result shows that the last column used in Row 3 is Column 4
(Column D).

### Search Last Row By Sheet

#### Objective
To identify the last used Row for the whole sheet using Get
Worksheet Info: Search Last Row (By Sheet).

First, create this script:

Before: All information stored in Excel sheet.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Get Worksheet Info
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Info Type to Last Row By Sheet so it will find the last used row
    for the whole sheet.

All fields not seen here do not need to be filled.

Message Box\

1.  Set Message to Display.

All fields not seen here do not need to be filled.

After: Result shows that the last row used in the sheet is Row 17.

### Search Last Row By Column

#### Objective
To identify the last used Row for Column C using Get
Worksheet Info: Search Last Row by Column.

First, create this script:

Before: All information stored in Excel sheet.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Get Worksheet Info
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Info Type to Last Row By Column so it will find the last used
    row for the selected Column.

4.  Set Column Number.

All fields not seen here do not need to be filled.

Message Box

1.  Set Message to Display.

All fields not seen here do not need to be filled.

After: Result shows that the last row used for Column C is Row 12.

### Check Worksheet Exist

#### Objective
To check whether an Excel worksheet "New Sheet" exists inside
the Excel file using Check Worksheet Exist task.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Excel Path     Input text that represents the path of the Excel file.
  (input)        

  Worksheet      Input text that represents the Sheet Name of the Excel
  (Name/No.)     file.
  (input)        
  -------------- --------------------------------------------------------

First, create this script:

Before: Picture shows that only "Sheet1" existed in the Excel file.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Check Worksheet Exist
1.  Set Excel Path.

2.  Set Worksheet Name to be checked.

All fields not seen here do not need to be filled.

Message Box\

1.  Set Message to Display.

All fields not seen here do not need to be filled.

After: Result shows that "New Sheet" does not exist in the Excel file.

 

### Edit Row

#### Objective
To edit a Row in Excel.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | Input text that represents the path of the Excel file. |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Worksheet   | Input text that represents the Sheet Name of the Excel |
| (Name/No.)  | file.                                                  |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Edit Mode   | Dropdown List allows the user to edit the row by:      |
| (Dropdown   |                                                        |
| List)       | a)  Insert Row: Insert New Row                         |
|             |                                                        |
|             | b)  Delete Row: Delete a row                           |
|             |                                                        |
|             | c)  Clear Row: Clear all data in a row.                |
|             |                                                        |
|             | d)  Copy Row: Copy one row to another row.             |
|             |                                                        |
|             | e)  Move Row: Move one row to another row.             |
+-------------+--------------------------------------------------------+
| Source Row  | Input text that represents the row to be edited.       |
| Number      |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target      | Input text that represents the path of the Excel file. |
| Excel Path  |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target      | Input text that represents the Sheet Name of the Excel |
| Worksheet   | file (can be another Sheet in the same Excel file).    |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target Row  | Input text that represents the row that will be edited |
| Number      |                                                        |
| (input)     | This will differ based on the Edit Mode:               |
|             |                                                        |
|             | a)  Insert Row: Same as Source Row Number              |
|             |                                                        |
|             | b)  Delete Row: Same as Source Row Number              |
|             |                                                        |
|             | c)  Clear Row: Same as Source Row Number               |
|             |                                                        |
|             | d)  Copy Row: The new row to paste the data.           |
|             |                                                        |
|             | e)  Move Row: The new row to paste the data.           |
+-------------+--------------------------------------------------------+

First, create this script:

Before: Row 3 is filled with existing data.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Edit Row
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Edit Mode to "Insert Row".

4.  Set Source Row Number to 3 so it will insert a new Row in Row 3.

5.  Set Shift Count.

6.  Set Target Excel Path.

7.  Set Target Worksheet.

8.  Set Target Row Number.

All sections not seen here do not need to be filled.

After: Empty row created in Row 3. Original data in Row 3 has been
shifted down.

 

### Edit Column

#### Objective
To edit a column in Excel.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | Input text that represents the path of the Excel file. |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Worksheet   | Input text that represents the Sheet Name of the Excel |
| (Name/No.)  | file.                                                  |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Edit Mode   | Dropdown List allows the user to edit the row by:      |
| (Dropdown   |                                                        |
| List)       | a)  Insert Column: Insert New Column                   |
|             |                                                        |
|             | b)  Delete Column: Delete a column.                    |
|             |                                                        |
|             | c)  Clear Column: Clear all data in a column.          |
|             |                                                        |
|             | d)  Copy Column: Copy one column to another column.    |
|             |                                                        |
|             | e)  Move Column: Move one column to another column.    |
+-------------+--------------------------------------------------------+
| Source      | Input text that represents the column to be edited.    |
| Column      |                                                        |
| Number      |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target      | Input text that represents the path of the Excel file. |
| Excel Path  |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target      | Input text that represents the Sheet Name of the Excel |
| Worksheet   | file (can be another Sheet in the same Excel file).    |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target      | Input text that represents the column to be edited.    |
| Column      |                                                        |
| Number      | This will differ based on the Edit Mode:               |
| (input)     |                                                        |
|             | a)  Insert Column: Same as Source Column Number        |
|             |                                                        |
|             | b)  Delete Column: Same as Source Column Number        |
|             |                                                        |
|             | c)  Clear Column: Same as Source Column Number         |
|             |                                                        |
|             | d)  Copy Column: The new Column to paste the data.     |
|             |                                                        |
|             | e)  Move Column: The new Column to paste the data.     |
+-------------+--------------------------------------------------------+

First, create this script:

Before: Column D is filled with existing data.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Edit Column
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Edit Mode to "Insert Column".

4.  Set Source Column Number to Column D so it will insert a new Column
    in Column D.

5.  Set Target Excel Path.

6.  Speak to Target Worksheet.

7.  Set Target Column Number.

All sections not seen here do not need to be filled.

After: Empty column created in Column D. Original data in Column D has
been shifted right.

 

### Edit Range

#### Objective
To edit a range (or table) of data.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Excel Path  | Input text that represents the path of the Excel file. |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Worksheet   | Input text that represents the Sheet Name of the Excel |
| (Name/No.)  | file.                                                  |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Edit Mode   | Allows the user to edit the row by:                    |
|             |                                                        |
|             | a)  Insert Range (Shift Down): Insert New Range and    |
|             |     then shift down the cells in place.                |
|             |                                                        |
|             | b)  Insert Range (Shift Right): Insert New Range and   |
|             |     then shift right the cells in place.               |
|             |                                                        |
|             | c)  Delete Range (Shift Up): Delete a range and shift  |
|             |     up the cells below.                                |
|             |                                                        |
|             | d)  Delete Range (Shift Left): Delete a range and      |
|             |     shift left the cells on the right.                 |
|             |                                                        |
|             | e)  Clear Range: Clear all data in a range.            |
|             |                                                        |
|             | f)  Copy Column: Copy all data in a range.             |
|             |                                                        |
|             | g)  Move Range (Shift Down): Move one range to another |
|             |     range and shift down the cells in place.           |
|             |                                                        |
|             | h)  Move Range (Shift Right): Move one range to        |
|             |     another range and shift right the cells in place.  |
+-------------+--------------------------------------------------------+
| Source Row  | Input text that represents the start row to be edited. |
| Number      |                                                        |
| (Start)     |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Source      | Input text that represents the start column to be      |
| Column      | edited.                                                |
| Number      |                                                        |
| (Start)     |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Source Row  | Input text that represents the end row to be edited.   |
| Number      |                                                        |
| (End)       |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Source      | Input text that represents the end column to be        |
| Column      | edited.                                                |
| Number      |                                                        |
| (End)       |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Shift Count | Input text that represents How many rows/columns to    |
| (input)     | shift up/down/right/left                               |
+-------------+--------------------------------------------------------+
| Target      | Input text that represents the path of the Excel file. |
| Excel Path  |                                                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target      | Input text that represents the Sheet Name of the Excel |
| Worksheet   | file (can be another Sheet in the same Excel file).    |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Target      | Input text that represents the column to be edited.    |
| Column      |                                                        |
| Number      | This will differ based on the Edit Mode:               |
| (input)     |                                                        |
|             | a)  Insert Range: Same as Source Column Number.        |
|             |                                                        |
|             | b)  Delete Range: Same as Source Column Number.        |
|             |                                                        |
|             | c)  Clear Range: Same as Source Column Number.         |
|             |                                                        |
|             | d)  Copy Range: The new Column to paste the data.      |
|             |                                                        |
|             | e)  Move Range: The new Column to paste the data.      |
+-------------+--------------------------------------------------------+
| Target Row  | Input text that represents the row to be edited.       |
| Number      |                                                        |
| (input)     | This will differ based on the Edit Mode:               |
|             |                                                        |
|             | f)  Insert Range: Same as Source Row Number.           |
|             |                                                        |
|             | g)  Delete Range: Same as Source Row Number.           |
|             |                                                        |
|             | h)  Clear Range: Same as Source Row Number.            |
|             |                                                        |
|             | i)  Copy Range: The new Row to paste the data.         |
|             |                                                        |
|             | j)  Move Range: The new Row to paste the data.         |
+-------------+--------------------------------------------------------+

### Insert Range (Shift Down)

#### Objective
To insert 4 new rows before row 2 for the range of Columns A
to E using edit mode: Insert Range (Shift Down).

First, create this script:

Before: No empty rows above Row 2.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Edit Range
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Change Edit Mode to Insert Range (Shift Down).

4.  Set Source Row (Start).

5.  Set Source Row (End).

6.  Set Column Number (Start).

7.  Set Column Number (End).

8.  Set Shift Count.

All fields not seen here do not need to be filled.

After: 4 new rows inserted before row 2. Original data has been shifted
down.

 

### Insert Range (Shift Right)

#### Objective
To insert 2 new columns before column A using edit mode:
Insert Range (Shift Right).

First, create this script:

Before: No empty column before column A.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Edit Range
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Change Edit Mode to Insert Range (Shift Right).

4.  Set Source Row (Start).

5.  Set Source Row (End).

6.  Set Column Number (Start).

7.  Set Column Number (End).

8.  Set Shift Count.

All fields not seen here do not need to be filled.

After: 2 empty column inserted before column A. Original data has been
shifted right.

 

### Clear Range

#### Objective
To clear all the information in Columns B to E using edit
mode: Clear Range.

First, create this script:

Before: All data stored in cell B2 until E17.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Edit Range
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Change Edit Mode to Clear Range.

4.  Set Source Row (Start).

5.  Set Source Row (End).

6.  Set Column Number (Start).

7.  Set Column Number (End).

8.  Set Shift Count.

All fields not seen here do not need to be filled.

After: All data cleared, leaving empty cells B2 until E17.

 

### Delete Range (Shift Up)

#### Objective
To delete Row 3 to 5 of the table without leaving an empty
space using edit mode: Delete Range (Shift Up).

First, create this script:

Before: Original data is placed in all cells. Rows 3,4 and 5 show data
about Selangor, N Sembilan and Johor. The last data is stored on line
17.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Edit Range
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Change Edit Mode to Delete Range (Shift Up).

4.  Set Source Row (Start).

5.  Set Source Row (End).

6.  Set Column Number (Start).

7.  Set Column Number (End).

8.  Set Shift Count.

All fields not seen here do not need to be filled.

After: Original data on line 3,4 and 5 are deleted. All data are shifted
up. Now, the last data is stored on line 14.

 

### Delete Range (Shift Left)

#### Objective
To delete Column A to B of the table without leaving an empty
space using edit mode: Delete Range (Shift Left).

First, create this script:

Before: Original data is placed in all cells. Columns A and B show data
State and Confirmed. The last data is stored in column E.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Edit Range
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Change Edit Mode to Delete Range (Shift Left).

4.  Set Source Row (Start).

5.  Set Source Row (End).

6.  Set Column Number (Start).

7.  Set Column Number (End).

8.  Set Shift Count.

All fields not seen here do not need to be filled.

After: Original data in column A and B are deleted. All data are shifted
left. Now, the last data is stored in column C.

 

### Worksheet

#### Objective
To create/rename/move/delete a sheet in Excel.

#### Table Field
+-----------------+----------------------------------------------------+
| Field           | Description                                        |
+-----------------+----------------------------------------------------+
| Task Name       | Name of the task belong to the group               |
+-----------------+----------------------------------------------------+
| Task            | Input text that represents the Description to      |
| Description     | describe the task. This is optional.           |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Excel Path      | Input text that represents the path of the Excel   |
| (input)         | file.                                              |
+-----------------+----------------------------------------------------+
| Source          | Input text that represents the Sheet Name of the   |
| Worksheet       | Excel file that will be                            |
| (Name/Position) | created/renamed/moved/deleted/copied.              |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Edit Mode       | Allows the user to:                                |
|                 |                                                    |
|                 | a)  Create Worksheet                               |
|                 |                                                    |
|                 | b)  Delete Worksheet                               |
|                 |                                                    |
|                 | c)  Rename Worksheet                               |
|                 |                                                    |
|                 | d)  Move Worksheet                                 |
|                 |                                                    |
|                 | e)  Copy Worksheet                                 |
+-----------------+----------------------------------------------------+
| New Excel Path  | Input text that represents the path of the Excel   |
| (input)         | file.                                              |
+-----------------+----------------------------------------------------+
| New Sheet Name  | Input text that represents the new Sheet Name of   |
| (input)         | the Excel file that will be                        |
|                 | created/renamed/moved/copied. Leave blank for      |
|                 | Delete WorkSheet.                                  |
+-----------------+----------------------------------------------------+
| New Sheet       | Only use this for Create WorkSheet. Input text |
| Position        | that represents the new position of the created    |
| (input)         | Worksheet. If input is "1" then the new Worksheet  |
|                 | will be placed as the first Worksheet.             |
+-----------------+----------------------------------------------------+

### Create Worksheet

#### Objective
To create a new Excel sheet named "New Sheet" using
Worksheet: Create Worksheet.

First, create this script:

Before: Picture shows that only "Sheet1" existed in the Excel file.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Worksheet
1.  Set Excel Path.

2.  Set Edit Mode to "Create Worksheet".

3.  Set Source Worksheet Name.

4.  Set New Excel Path.

5.  Set New Sheet Name.

6.  Set New Sheet Position as "2" as it will set the new sheet as the
    second sheet in the Excel file.

All fields not seen here do not need to be filled.

After: A new worksheet named "New Sheet" has been created.

 

### Rename Worksheet

#### Objective
To rename the Excel sheet "New Sheet" to the current date
using Worksheet: Rename Worksheet.

First, create this script:

Before: Picture shows existing worksheet named "New Sheet".

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Worksheet
1.  Set Excel Path.

2.  Set Source Worksheet Name.

3.  Set New Excel Path.

4.  Set New Sheet Name with global variable \@CurrentDate@.

5.  Set New Sheet Position as "2" as the sheet to be renamed is in the
    second position.

All fields not seen here do not need to be filled.

After: The original "New Sheet" has been renamed to "20221006" (Current
date).


### Delete Worksheet

#### Objective
To delete the Excel sheet "Sheet1" using Worksheet: Delete
Worksheet.

First, create this script:

Before: Picture shows existing worksheet named "Sheet1" and "20221006".

#### Steps


1.  Set Excel Path.

2.  Set Edit Mode to "Delete Worksheet".

3.  Set Source Worksheet Name to "Sheet1" as that is the sheet to be
    deleted.

All fields not seen here do not need to be filled.

After: "Sheet1" has been deleted. Only "20221006" is left.

 

### Sort Data by Column

#### Objective
To sort data in an entire Excel table according to an Excel
column(s).

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Excel Path     Input text that represents the path of the Excel file.
  (input)        

  Worksheet      Input text that represents the Sheet Name of the Excel
  (Name/No.)     file.
  (input)        

  Header Row     Input text that represents the row with the Headers in
  (input)        the Excel table. The OrangeBot will avoid sorting the
                 data in the Header row.

  Column to Sort Input text that represents the column that is used as
  1 (input)      the source to sort the entire Excel table.

  Ordering       A Dropdown List that allows the user to sort the Excel
  (Dropdown      table according to Column to Sort 1 by
  List)          ascending/descending order.

  Column to Sort Input text that represents the second column that is
  2 (input)      used as the source to sort the entire Excel table.
                 (Leave blank if not needed)

  Ordering       A Dropdown List that allows the user to sort the Excel
  (Dropdown      table according to Column to Sort 2 by
  List)          ascending/descending order.

  Column to Sort Input text that represents the third column that is used
  3 (input)      as the source to sort the entire Excel table. (Leave
                 blank if not needed)

  Ordering       A Dropdown List that allows the user to sort the Excel
  (Dropdown      table according to Column to Sort 3 by
  List)          ascending/descending order.
  -------------- --------------------------------------------------------

First, create this script:

Before: Data in column A is arranged in no particular order.

#### Steps


Open Excel
1.  Set Excel Path.

2.  Set Visible as Yes.

3.  Set Update Formula as Yes.

All fields not seen here do not need to be filled.

Sort Data By Column
1.  Set Excel Path.

2.  Set Sheet Name.

3.  Set Header Row.

4.  Set Column to Sort.

5.  Set Ordering to "Ascending" so it is arranged from
    alphabetical/numerical order.

All fields not seen here do not need to be filled.

After: Data in Column A is now arranged in ascending alphabetical order.

 

### Text to Columns

#### Objective
To split text data in a cell into multiple columns.

#### Table Field
+-----------------+----------------------------------------------------+
| Field           | Description                                        |
+-----------------+----------------------------------------------------+
| Task Name       | Name of the task belong to the group               |
+-----------------+----------------------------------------------------+
| Task            | Input text that represents the Description to      |
| Description     | describe the task. This is optional.           |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Excel Path      | Input text that represents the input file path of  |
| (input)         | the Excel file.                                    |
+-----------------+----------------------------------------------------+
| Worksheet       | Input text that represents the input Sheet Name of |
| (Name/Position) | the Excel file.                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Column Number   | Input text that represents the input column to be  |
| (input)         | split.                                             |
+-----------------+----------------------------------------------------+
| Row Number      | Input text that represents the start row to be     |
| (Start) (input) | edited.                                            |
+-----------------+----------------------------------------------------+
| Row Number      | Input text that represents the end row to be       |
| (End) (input)   | edited.                                            |
+-----------------+----------------------------------------------------+
| Split By        | Input text that represents Yes Or No.              |
| Semicolon       |                                                    |
| (input)         | The OrangeBot will split the text by ";" if        |
|                 | inputted as Yes.                               |
+-----------------+----------------------------------------------------+
| Split by Comma  | Input text that represents Yes Or No.              |
| (input)         |                                                    |
|                 | The OrangeBot will split the text by "," if        |
|                 | inputted as Yes.                               |
+-----------------+----------------------------------------------------+
| Split by Others | Input text that represents a custom keyword.       |
| (input)         |                                                    |
|                 | The OrangeBot will split the text by a custom      |
|                 | input keyword or character. For example, if the    |
|                 | user sets it as "and" it will split the text by    |
|                 | "and".                                             |
+-----------------+----------------------------------------------------+

### Text to Columns: By Comma

#### Objective
To split multiple texts separated by comma into multiple
different columns using Text to Columns: By Comma.

First, create this script:

Before: Column F contained "Name" and "Address" in the same cell,
separated by a comma(,).

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Text to Columns
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Column Number.

4.  Set Row Number (Start).

5.  Set Row Number (End).

6.  Set Split by Comma to "Yes".

All fields not seen here do not need to be filled.

After: "Name" and "Address" have been separated into two different
columns.

 

### Text to Columns: By Spacing

#### Objective
To split multiple texts separated by space into multiple
different columns using Text to Columns: By Spacing.

First, create this script:

Before: Column F contained "Name" and "Address" in the same cell,
separated by a spacing.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Text to Columns
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Column Number.

4.  Set Row Number (Start).

5.  Set Row Number (End).

6.  Set Split by Space to "Yes".

All fields not seen here do not need to be filled.

After: "Name" and "Address" have been separated into two different
columns.

 

### Text to Columns: By Semicolon

#### Objective
To split multiple texts separated by semicolon into multiple
different columns using Text to Columns: By Semicolon.

First, create this script:

Before: Column F contained "Name" and "Address" in the same cell,
separated by a semicolon(;).

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Text to Columns
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Column Number.

4.  Set Row Number (Start).

5.  Set Row Number (End).

6.  Set Split by Semicolon to "Yes".

All fields not seen here do not need to be filled.

After: "Name" and "Address" have been separated into two different
columns.

 

### Text to Columns: By Others

#### Objective
To split multiple texts separated by other punctuations into
multiple different columns using Text to Columns: By Others.

First, create this script:

Before: Column F contained "Name" and "Address" in the same cell,
separated by a hyphen(-).

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Text to Columns
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Column Number.

4.  Set Row Number (Start).

5.  Set Row Number (End).

6.  Fill in the Split by Others field with the punctuation used as
    separator between texts.

All fields not seen here do not need to be filled.

After: "Name" and "Address" have been separated into two different
columns.

 

### Edit Format & Style

#### Objective
To edit the format of the Excel file.

#### Table Field
+-----------------+----------------------------------------------------+
| Field           | Description                                        |
+-----------------+----------------------------------------------------+
| Task Name       | Name of the task belong to the group               |
+-----------------+----------------------------------------------------+
| Task            | Input text that represents the Description to      |
| Description     | describe the task. This is optional.           |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Excel Path      | The input file path of the Excel file.             |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Worksheet       | The input Sheet Name of the Excel file.            |
| (Name/Position) |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Mode (Dropdown  | A dropdown list that will allow the user to:       |
| List)           |                                                    |
|                 | a)  Autofit Column - Autofit the columns in the    |
|                 |     Excel file to fit the text (smaller columns    |
|                 |     for smaller text, etc.)                        |
|                 |                                                    |
|                 | b)  Autofit Row - Autofit the rows in the Excel    |
|                 |     file to fit the text (smaller rows for smaller |
|                 |     text, etc.)                                    |
|                 |                                                    |
|                 | c)  Cell Format - Change the format of cells in an |
|                 |     Excel file to another format (Date,            |
|                 |     Accounting, Currency, etc.)                    |
|                 |                                                    |
|                 | d)  Fill Color - Fill cells in the Excel file with |
|                 |     a color (red, green, etc.)                     |
|                 |                                                    |
|                 | e)  Font Color - Highlight text with a color (red, |
|                 |     green, etc.)                                   |
|                 |                                                    |
|                 | f)  Column Width - Edit the size of a column(s) in |
|                 |     an Excel file.                                 |
|                 |                                                    |
|                 | g)  Row Height - Edit the size of a row(s) in an   |
|                 |     Excel file.                                    |
+-----------------+----------------------------------------------------+
| Target Row      | This input starting row to be edited.              |
| Number (Start)  |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Target Column   | This input starting column row to be edited.       |
| Number (Start)  |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Target Row      | This input ending row to be edited.                |
| Number (End)    |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Target Column   | This input ending column to be edited.             |
| Number (End)    |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Parameter       | Leave blank if not needed. Only needs to be filled |
| (input)         | for Cell Format, Fill Color, Font Color, Column  |
|                 | Width, and Row Height. For example:              |
|                 |                                                    |
|                 | a)  Cell Format: "\[\$MYR\] \# ##0.00" to edit     |
|                 |     format to MYR currency.                        |
|                 |                                                    |
|                 | b)  Fill Color: "255,0,0" for Red.                 |
|                 |                                                    |
|                 | c)  Font Color: "255,0,0" for Red.                 |
|                 |                                                    |
|                 | d)  Column Width: 60                               |
|                 |                                                    |
|                 | e)  Row Height: 60                                 |
+-----------------+----------------------------------------------------+

### Autofit Column

#### Objective
To split multiple texts separated by other punctuations into
multiple different columns using Text to Columns: By Others.

First, create this script:

Before: All the columns do not fit properly in the Excel sheet.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Edit Format & Style
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Mode as Autofit Column.

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

7.  Set Column Number (End).

All fields not seen here do not need to be filled.

After: Result shows that all Columns are automatically fitted properly.

 

### Autofit Row

#### Objective
To Autofit all the Rows in the Excel Table.

First, create this script:

Before: All the rows do not fit properly in the Excel sheet.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Edit Format & Style
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Mode as Autofit Row.

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

7.  Set Column Number (End).

All fields not seen here do not need to be filled.

After: Result shows that all Rows are automatically fitted properly.

 

### Cell Format

#### Objective
To set the cells G2 to I7 under the MYR Currency Format.

First, create this script:

Before: The cells G2 to I7 are in a General Text Format.

You can check More Number Formats under Custom to get the text to set
the format for MYR.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Edit Format & Style
1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as Cell Format

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

7.  Set Column Number (End)

8.  Set Parameter as \[\$MYR\] #,##0.00

All fields not seen here do not need to be filled.

After: Result shows that cells G2 to I7 are set in MYR Currency Format.

 

### Fill Color

#### Objective
To fill the color Red for the cells I2 to I7.

First, create this script:

Before: The cells I2 to I7 are in the colour White.

You can check More Colors under Custom to get the numbers for Red.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Edit Format & Style
1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as Fill Color

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

7.  Set Column Number (End)

8.  Set Parameter as 255,0,0

All fields not seen here do not need to be filled.

After: Result shows that cells I2 to I7 are filled with the color Red.

 

### Font Color

#### Objective
To set the text in color Green for the cells A1 to C1.

First, create this script:

Before: The text in the cells A1 to I1 are in the color Black.

You can check More Colors under Custom to get the numbers for Green.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Edit Format & Style
1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as Font Color

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

7.  Set Column Number (End)

8.  Set Parameter as 0,204,0

All fields not seen here do not need to be filled.

After: Result shows that the text in cells A1 to I1 are in the color
Green.

 

### Column Width

#### Objective
To set all Columns to 15 points.

First, create this script:

Before: The Excel table columns all have different sizes.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Edit Format & Style
1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as Column Width

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

7.  Set Column Number (End)

8.  Set Parameter as 15

All fields not seen here do not need to be filled.

After: Result shows that all Columns are 15 points.

 

### Row Height

#### Objective
To set all Rows to 25 points.

First, create this script:

Before: The Excel table rows are all set to 15 points.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Edit Format & Style
1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as Row Height

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

7.  Set Column Number (End)

8.  Set Parameter as 25

All fields not seen here do not need to be filled.

After: Result shows that all Rows are 25 points.

 

### Save Excel

#### Objective
To save an Excel file.

#### Table Field
+-----------------+----------------------------------------------------+
| Field           | Description                                        |
+-----------------+----------------------------------------------------+
| Task Name       | Name of the task belong to the group               |
+-----------------+----------------------------------------------------+
| Task            | Input text that represents the Description to      |
| Description     | describe the task. This is optional.           |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Excel Path      | The input file path of the Excel file.             |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Worksheet       | The input Sheet Name of the Excel file.            |
| (Name/Position) |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| New Path        | The input file path of the Excel file.             |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Mode (Dropdown  | A dropdown list that will allow the user to:       |
| List)           |                                                    |
|                 | a)  Save                                           |
|                 |                                                    |
|                 | b)  Save as                                        |
|                 |                                                    |
|                 | c)  Save as CSV File                               |
|                 |                                                    |
|                 | d)  Export as PDF File                             |
|                 |                                                    |
|                 | e)  Export as XPS File                             |
+-----------------+----------------------------------------------------+

### Save

#### Objective
To save an Excel file.

#### Steps


1.  Set Excel Path

2.  Set New Path (Same File Path)

3.  Set Mode as Save

All fields not seen here do not need to be filled.

### Save As

#### Objective
To save an Excel file to a different Folder.

"Order Record" Excel file is in the Output folder.

Before: The "Exception File" Folder is empty.

#### Objective
To save an Excel file.

#### Steps


1.  Set Excel Path (for "Order Record File" Path)

2.  Set New Path (File Path for "Exception File" Folder)

3.  Set Mode as Save as

All fields not seen here do not need to be filled.

After: Result shows that "Order Record" Excel file in "Exception File"
folder.

 

### Save as CSV File

#### Objective
To save an Excel file as a CSV file.

Before: "Order Record" Excel file is in the Output folder.

#### Steps


1.  Set Excel Path (for "Order Record File" Path)

2.  Set New Path (Change File extension to ".csv")

3.  Set Mode as Save as CSV File

All fields not seen here do not need to be filled.

After: Result shows "Order Record" CSV file in the Output folder.

 

### Export as PDF File

#### Objective
To save an Excel file as a PDF file.

Before: "Order Record" Excel file is in the Output folder.

#### Steps


1.  Set Excel Path (for "Order Record File" Path)

2.  Set New Path (Change File extension to ".pdf")

3.  Set Mode as Export as PDF File

All fields not seen here do not need to be filled.

After: Result shows "Order Record" PDF file in the Output folder.

 

### Export as XPS File

#### Objective
To save an Excel file as an XPS file.

Before: "Order Record" Excel file is in the Output folder.

#### Steps


1.  Set Excel Path (for "Order Record File" Path)

2.  Set New Path (Change File extension to ".xps")

3.  Set Mode as Export as XPS File

All fields not seen here do not need to be filled.

After: Result shows "Order Record" XPS file in the Output folder.

 

### Delete Row(s)

#### Objective
To delete Rows in an Excel file.

#### Table Field
+-----------------+----------------------------------------------------+
| Field           | Description                                        |
+-----------------+----------------------------------------------------+
| Task Name       | Name of the task belong to the group               |
+-----------------+----------------------------------------------------+
| Task            | Input text that represents the Description to      |
| Description     | describe the task. This is optional.           |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Excel Path      | The input file path of the Excel file.             |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Worksheet       | The input Sheet Name of the Excel file.            |
| (Name/Position) |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Mode (Dropdown  | A dropdown list that will allow the user to:       |
| List)           |                                                    |
|                 | a)  Blank Row - Delete blank rows.                 |
|                 |                                                    |
|                 | b)  By Value - Delete rows with a specific value   |
|                 |     (e.g. 123).                                    |
|                 |                                                    |
|                 | c)  Duplicate - Delete duplicate rows.             |
|                 |                                                    |
|                 | d)  Range - Delete custom rows specified by the    |
|                 |     user (e.g. C1 to C7)                           |
+-----------------+----------------------------------------------------+
| Target Row      | This input starting row to be deleted.             |
| Number (Start)  |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Target Column   | This input starting column to be deleted.          |
| Number (Start)  |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Target Row      | This input ending row to be deleted.               |
| Number (End)    |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Target Column   | This input ending column to be deleted.            |
| Number (End)    |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Parameter       | This is only used for By Value. The user need  |
| (Value) (input) | to input the text value for the OrangeBot to       |
|                 | delete (e.g. if set as "123", all rows with the    |
|                 | value "123" will be deleted).                      |
+-----------------+----------------------------------------------------+

### By Blank Row

#### Objective
To delete all Rows that are blank in Column B.

First, create this script:

Before: There is a blank cell in B4. The Excel table has 7 rows.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Delete Row(s)
1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as Blank Row

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

All fields not seen here do not need to be filled.

After: Result shows that after the row with blank cells are deleted,
there are 6 rows left.

 

### By Value

#### Objective
To delete all Rows with "Item 3" in Column C.

First, create this script:

Before: There are three rows with the text "Item 3". The Excel table has
7 rows.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Delete Row(s)
1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as By Value

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

7.  Set Parameter as "Item 3"

All fields not seen here do not need to be filled.

After: Result shows that after the rows with "Item 3" are deleted, there
are 5 rows left.

 

### Duplicate

#### Objective
To delete all Rows with Duplicates in Column F.

First, create this script:

Before: There are 3 "China" rows and 2 "Vietnam" rows in Column F. The
Excel table has 7 rows.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Delete Row(s)\

1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as Duplicate

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

All fields not seen here do not need to be filled.

After: Result shows that after duplicate rows in Column F are deleted,
there are 4 rows left.

 

### Range

#### Objective
To delete Excel Range A2 to C7.

First, create this script:

Before: The Excel table has 7 rows.

#### Steps

Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Delete Row(s)\

1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as Range

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

7.  Set Column Number (End)

All fields not seen here do not need to be filled.

After: Result shows that after deleting, there is 1 row left.

 

### Delete Column(s)

#### Objective
To delete Columns in an Excel file.

#### Table Field
+-----------------+----------------------------------------------------+
| Field           | Description                                        |
+-----------------+----------------------------------------------------+
| Task Name       | Name of the task belong to the group               |
+-----------------+----------------------------------------------------+
| Task            | Input text that represents the Description to      |
| Description     | describe the task. This is optional.           |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Excel Path      | The input file path of the Excel file.             |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Worksheet       | The input Sheet Name of the Excel file.            |
| (Name/Position) |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Mode (Dropdown  | A dropdown list that will allow the user to:       |
| List)           |                                                    |
|                 | a)  Blank Column- Delete blank columns.            |
|                 |                                                    |
|                 | b)  By Value - Delete columns with a specific      |
|                 |     value (e.g. 123).                              |
|                 |                                                    |
|                 | c)  Range - Delete custom columns specified by the |
|                 |     user (e.g. C1 to E1)                           |
+-----------------+----------------------------------------------------+
| Target Row      | This input starting row to be deleted.             |
| Number (Start)  |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Target Column   | This input starting column to be deleted.          |
| Number (Start)  |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Target Row      | This input ending row to be deleted.               |
| Number (End)    |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Target Column   | This input ending column to be deleted.            |
| Number (End)    |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Parameter       | This is only used for By Value. The user need  |
| (Value) (input) | to input the text value for the OrangeBot to       |
|                 | delete (e.g. if set as "123", all columns with the |
|                 | value "123" will be deleted).                      |
+-----------------+----------------------------------------------------+

### By Blank Column

#### Objective
To delete all Columns that are blank.

First, create this script:

Before: There is a blank cell in D1. The Excel table has 4 columns.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Delete Column(s)
1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as Blank Row

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Column Number (End)

All fields not seen here do not need to be filled.

-   

After: Result shows that after the Column with blank cells are deleted,
there are 3 columns left.

 

### By Value

#### Objective
To delete all Columns with "Description" in Row 1.

First, create this script:

Before: "Descriptions" is in D1. The Excel table has 4 columns.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Delete Column(s)
1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as Blank Row

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Column Number (End)

7.  Set Parameter as "Descriptions".

All fields not seen here do not need to be filled.

-   

After: Result shows that after the Column with "Description" is deleted,
there are 3 columns left.

 

### Range

#### Objective
To delete Excel Range B1 to D7.

First, create this script:

Before: The Excel table has 4 columns and 7 rows.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Delete Column(s)
1.  Set Excel Path

2.  Set Worksheet Name

3.  Set Mode as Range

4.  Set Row Number (Start)

5.  Set Column Number (Start)

6.  Set Row Number (End)

7.  Set Column Number (End)

All fields not seen here do not need to be filled.

-   

After: Result shows that after deleting B1 to C7, there is 1 column
left.

 

### Workbook Protection

#### Objective
To protect an Excel Workbook with a password or unlock an
Excel workbook with a password.

#### Table Field
+-----------------+----------------------------------------------------+
| Field           | Description                                        |
+-----------------+----------------------------------------------------+
| Task Name       | Name of the task belong to the group               |
+-----------------+----------------------------------------------------+
| Task            | Input text that represents the Description to      |
| Description     | describe the task. This is optional.           |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Excel Path      | The input file path of the Excel file.             |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Mode (Dropdown  | A dropdown list that will allow the user to:       |
| List)           |                                                    |
|                 | a)  Protect                                        |
|                 |                                                    |
|                 | b)  Unprotect                                      |
+-----------------+----------------------------------------------------+
| Application     | This is optional. The Application Name refers  |
| Name (input)    | to the chosen input Name used when configuring     |
|                 | Authentication Configuration. The OrangeBot will   |
|                 | extract the password from Authentication           |
|                 | Configuration with this Application Name. Leave    |
|                 | blank if not needed.                               |
+-----------------+----------------------------------------------------+
| User ID/Name    | This is optional. The User ID refers to the    |
| (input)         | input chosen user ID used when configuring         |
|                 | Authentication Configuration. The username for the |
|                 | application/website is what the user would usually |
|                 | choose. The OrangeBot will extract the password    |
|                 | from Authentication Configuration with this User   |
|                 | ID/Name. For example, if it is a website, it will  |
|                 | use the website username as the User ID.           |
+-----------------+----------------------------------------------------+
| Password        | The input password to protect/unprotect the Excel  |
| (input)         | Workbook.                                          |
+-----------------+----------------------------------------------------+

### Workbook Protect

#### Objective
To protect an Excel Workbook with a password (This will block
you from adding/deleting Worksheets until you enter your password).

Before: We need to keep anyone else from deleting this Worksheet or
adding a new Worksheet.

#### Steps


1.  Set Excel Path.

2.  Set Mode as Protect.

3.  Set Password.

All fields not seen here do not need to be filled.

-   

After: Result shows that we cannot add, delete, rename or move the
Worksheet.

 

### Workbook Unprotect

#### Objective
To unprotect an Excel Workbook with a password so we can
rename/add/delete Worksheets.

Before: We need unprotect the Workbook so we can rename/add/delete
Worksheets.

#### Steps


1.  Set Excel Path.

2.  Set Mode as Unprotect.

3.  Set the same Password as "WorkBook Protection: Protect".

All fields not seen here do not need to be filled.

-   

After: Result shows that now we can add, delete, rename or move the
Worksheet.

 

### Worksheet Protection

#### Objective
To protect an Excel Worksheet from editing or unlock a
protected Excel Worksheet.

#### Table Field
+-----------------+----------------------------------------------------+
| Field           | Description                                        |
+-----------------+----------------------------------------------------+
| Task Name       | Name of the task belong to the group               |
+-----------------+----------------------------------------------------+
| Task            | Input text that represents the Description to      |
| Description     | describe the task. This is optional.           |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Excel Path      | The input file path of the Excel file.             |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Mode (Dropdown  | A dropdown list that will allow the user to:       |
| List)           |                                                    |
|                 | c)  Protect                                        |
|                 |                                                    |
|                 | d)  Unprotect                                      |
+-----------------+----------------------------------------------------+
| Application     | This is optional. The Application Name refers  |
| Name (input)    | to the chosen input Name used when configuring     |
|                 | Authentication Configuration. The OrangeBot will   |
|                 | extract the password from Authentication           |
|                 | Configuration with this Application Name. Leave    |
|                 | blank if not needed.                               |
+-----------------+----------------------------------------------------+
| User ID/Name    | This is optional. The User ID refers to the    |
| (input)         | input chosen user ID used when configuring         |
|                 | Authentication Configuration. The username for the |
|                 | application/website is what the user would usually |
|                 | choose. The OrangeBot will extract the password    |
|                 | from Authentication Configuration with this User   |
|                 | ID/Name. For example, if it is a website, it will  |
|                 | use the website username as the User ID.           |
+-----------------+----------------------------------------------------+
| Password        | The input password to protect/unprotect the Excel  |
| (input)         | Workbook.                                          |
+-----------------+----------------------------------------------------+
| Row Number      | This input starting row to be                      |
| (Start) (input) | protected/unprotected.                             |
+-----------------+----------------------------------------------------+
| Column Number   | This input starting column to be                   |
| (Start) (input) | protected/unprotected.                             |
+-----------------+----------------------------------------------------+
| Row Number      | This input ending row to be protected/unprotected. |
| (End) (input)   |                                                    |
+-----------------+----------------------------------------------------+
| Column Number   | This input ending column to be                     |
| (End) (input)   | protected/unprotected.                             |
+-----------------+----------------------------------------------------+

### Worksheet Protect

#### Objective
To protect an Excel Worksheet from editing with a password.

Before: We need to protect this Excel table from editing with a
password.

#### Steps


1.  Set Excel Path.

2.  Set Mode as Protect.

3.  Set Password.

4.  Set Worksheet.

5.  Set Row Number (Start) as 1.

6.  Set Column Number (Start) as A.

7.  Set Row Number (End) as 17.

8.  Set Column Number (End) as E.

All fields not seen here do not need to be filled.

-   

After: Result shows that we cannot edit the Worksheet anymore.

 

### Worksheet Unprotect

#### Objective
To unprotect an Excel Worksheet with a password to allow us
to edit the Worksheet.

Before: We need to unprotect this Excel table so we can edit it.

#### Steps


1.  Set Excel Path.

2.  Set Mode as Protect.

3.  Set Password.

4.  Set Worksheet.

5.  Set Row Number (Start) as 1.

6.  Set Column Number (Start) as A.

7.  Set Row Number (End) as 17.

8.  Set Column Number (End) as E.

All fields not seen here do not need to be filled.

-   

After: Result shows that we can edit the Worksheet now.

 

### Auto Fill

#### Objective
To Autofill Data in an Excel File.

#### Table Field
+-----------------+----------------------------------------------------+
| Field           | Description                                        |
+-----------------+----------------------------------------------------+
| Task Name       | Name of the task belong to the group               |
+-----------------+----------------------------------------------------+
| Task            | Input text that represents the Description to      |
| Description     | describe the task. This is optional.           |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Excel Path      | The input file path of the Excel file.             |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Worksheet       | The input Sheet Name of the Excel file.            |
| (Name/Position) |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Reference Row   | This input starting row to serve as a reference.   |
| Number (Start)  |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Reference       | This input starting column to serve as a           |
| Column Number   | reference.                                         |
| (Start) (input) |                                                    |
+-----------------+----------------------------------------------------+
| Reference Row   | This input ending row to serve as a reference.     |
| Number (End)    | This is only used for Default.                 |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Reference       | This input ending column to serve as a reference.  |
| Column Number   | This is only used for Default.                 |
| (End) (input)   |                                                    |
+-----------------+----------------------------------------------------+
| Target Row      | This input last row for the auto fill to extend    |
| Number (input)  | to. For example, if it set as "10", the Auto fill  |
|                 | will extend until row 10                           |
+-----------------+----------------------------------------------------+
| Target Column   | This input last column for the auto fill to extend |
| Number (input)  | to. For example, if it set as "E", the Auto fill   |
|                 | will extend until column E.                        |
+-----------------+----------------------------------------------------+
| Auto Fill Type  | A dropdown list that will allow the user to:       |
| (Dropdown List) |                                                    |
|                 | a)  Default - Follows the series already set in    |
|                 |     Excel.                                         |
|                 |                                                    |
|                 | b)  Copy - Copy the Reference cell and auto fill   |
|                 |     the exact same text into all the cells between |
|                 |     the reference cell until the Target Cell.      |
|                 |                                                    |
|                 | c)  Series - Auto fill the data from the reference |
|                 |     cell until the Target Cell in the form of a    |
|                 |     series. (e.g. If the value in the Reference    |
|                 |     cell is "1", the series will make the next     |
|                 |     cell "2" and continue to increase one by one   |
|                 |     until the target cell)                         |
|                 |                                                    |
|                 | d)  Formats - Copy the format of the Reference     |
|                 |     cell (Font Color, Currency Format, etc.) and   |
|                 |     applies it from the reference cell all the way |
|                 |     to the Target cell.                            |
+-----------------+----------------------------------------------------+

### Default

#### Objective
To Autofill Data in a Column. Default will follow the format
already set in the Excel. In this case, the Data is 1 to 2, so it should
continue to 3 to 4 to 5.

First, create this script:

Before: The Data is only in Row 1 and Row 2.

#### Steps

Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Auto Fill\

1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Reference Row Number (Start) as 1.

4.  Set Reference Column Number (Start) as A.

5.  Set Reference Row Number (End) as 2.

6.  Set Reference Column Number (End) as A.

7.  Set Target Row Number as 10.

8.  Set Target Column Number as A.

9.  Set Auto Fill Type as Default.

All fields not seen here do not need to be filled.

-   

After: Result shows that the Bot autofills the format already in Row 1
and 2 until Row 10.

 

### Copy

#### Objective
To Autofill and copy Data.

First, create this script:

Before: The Data is only in Row 1.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Auto Fill\

1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Reference Row Number (Start) as 1.

4.  Set Reference Column Number (Start) as A.

5.  Set Target Row Number as 10.

6.  Set Target Column Number as A.

7.  Set Auto Fill Type as Default.

All fields not seen here do not need to be filled.

-   

After: Result shows that the Bot copies the data in Row 1 and autofill
in every row until Row 10.

 

### Series

#### Objective
To Autofill Data in a series.

First, create this script:

Before: The Data is only in Row 1.

#### Steps


Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Auto Fill
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Reference Row Number (Start) as 1.

4.  Set Reference Column Number (Start) as A.

5.  Set Target Row Number as 10.

6.  Set Target Column Number as A.

7.  Set Auto Fill Type as Default.

All fields not seen here do not need to be filled.

-   

After: Result shows that the Bot autofills the data in Row 1 in a series
until Row 10.

 

### Formats

#### Objective
To Autofill the format in a row and apply it for other rows.

First, create this script:

Before: The Data in Row 1 has red text.

#### Steps

Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Auto Fill
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Reference Row Number (Start) as 1.

4.  Set Reference Column Number (Start) as A.

5.  Set Target Row Number as 10.

6.  Set Target Column Number as A.

7.  Set Auto Fill Type as Default.

All fields not seen here do not need to be filled.

 

After: Result shows that the Bot autofills the format of red text until
Row 10.

 

### Filter Table

#### Objective
To filter a Table in Excel.

#### Table Field
+-----------------+----------------------------------------------------+
| Field           | Description                                        |
+-----------------+----------------------------------------------------+
| Task Name       | Name of the task belong to the group               |
+-----------------+----------------------------------------------------+
| Task            | Input text that represents the Description to      |
| Description     | describe the task. This is optional.           |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Excel Path      | The input file path of the Excel file.             |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Worksheet       | The input Sheet Name of the Excel file.            |
| (Name/Position) |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Mode (Dropdown  | A dropdown list that will allow the user to filter |
| List)           | by:                                                |
|                 |                                                    |
|                 | a)  Text                                           |
|                 |                                                    |
|                 | b)  Cell Color                                     |
|                 |                                                    |
|                 | c)  Font Color                                     |
|                 |                                                    |
|                 | d)  Remove Filter                                  |
+-----------------+----------------------------------------------------+
| Header Row      | This input starting row to be deleted.             |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Header Column   | This input starting column to be deleted.          |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Target Row      | This input ending row to be deleted.               |
| Number (End)    |                                                    |
| (input)         |                                                    |
+-----------------+----------------------------------------------------+
| Value to Filter | This is only used for Text mode. The input     |
| 1 (input)       | text that the OrangeBot will filter.               |
+-----------------+----------------------------------------------------+
| Value to Filter | This is only used for Text mode. The second    |
| 2 (input)       | input text that the OrangeBot will filter. Can be  |
|                 | left blank if not needed.                          |
+-----------------+----------------------------------------------------+
| Color to Filter | This is only used for Fill Color and Font        |
| (input)         | Color mode. This will filter the table based on  |
|                 | the chosen color. (e.g.\                           |
|                 | 255,0,0) to filter Red)                            |
+-----------------+----------------------------------------------------+

### Text

#### Objective
To filter a Table in Excel according to a custom text(s).

First, create this script:

Before: We need to filter this table.

#### Steps

Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Filter Table
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Mode as Text.

4.  Set Header Row as 1.

5.  Set Header Column as A.

6.  Set Value to Filter as Selangor.

7.  Set Value to Filter as N Sembilan.

All fields not seen here do not need to be filled.

-   

After: Result shows that the Bot filters the table according to Selangor
& N Sembilan.

 

### Font Color

#### Objective
To filter a Table in Excel according to Cells with a chosen
colour (e.g. Green).

Before: We need to filter this table according to the cells with Green
text in Column E.

Click Font Color & Click "More Colors".

Click Custom to see the numbers for Green.

#### Steps

Open Excel
1.  Set Excel Path.

All fields not seen here do not need to be filled.

Filter Table
1.  Set Excel Path.

2.  Set Worksheet Name.

3.  Set Mode as Font Color.

4.  Set Header Row as 1.

5.  Set Header Column as E.

6.  Set Value to Filter as 255,0,0 for Red.

All fields not seen here do not need to be filled.



After: Result shows that the Bot filters the table according to cells
with Green text.

## Outlook Command

### Search Email

#### Objective
To search an email(s) in Microsoft Outlook.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Email       | The input Email account that is set in Outlook Desktop |
| Account     | (e.g.                                                  |
| (input)     | [[example@o                                            |
|             | utlook.com]{.underline}](mailto:example@outlook.com)). |
|             | Set as Default for the Default email account in    |
|             | Microsoft Outlook.                                     |
+-------------+--------------------------------------------------------+
| Search      | A dropdown list that allows the user to search for an  |
| Folder      | email(s) in a chosen folder:                           |
| (Dropdown   |                                                        |
| List)       | a)  Inbox                                              |
|             |                                                        |
|             | b)  Outbox                                             |
|             |                                                        |
|             | c)  Sent Items                                         |
|             |                                                        |
|             | d)  Draft                                              |
+-------------+--------------------------------------------------------+
| Search Tag  | A dropdown list that allows the user to search for an  |
| (Dropdown   | email(s) by:                                           |
| List)       |                                                        |
|             | a)  All - Search all emails, both read and unread.     |
|             |                                                        |
|             | b)  Read - Search only read emails.                    |
|             |                                                        |
|             | c)  Unread - Search only unread emails.                |
+-------------+--------------------------------------------------------+
| Search By   | A dropdown list that allows the user to search for an  |
| (Dropdown   | email(s) by:                                           |
| List)       |                                                        |
|             | a)  Subject - Search for an email(s) with an input     |
|             |     keyword in the subject. For example, setting "FW"  |
|             |     as the keyword will allow the Orange Bot to search |
|             |     all emails with "FW" in the subject, like "FW:     |
|             |     Booking Acknowledgement".                          |
|             |                                                        |
|             | b)  Subject (Exact Match) - Search for an email(s)     |
|             |     with the exact same subject with an input keyword. |
|             |     For example, if the keyword is "Booking            |
|             |     Acknowledgement", it will only search for emails   |
|             |     with the exact subject "Booking Acknowledgement".  |
|             |                                                        |
|             | c)  Sender Email - Search for an email(s) sent from a  |
|             |     specific email. For example, the OrangeBot will    |
|             |     search for all emails sent by                      |
|             |     [[example@                                         |
|             | outlook.com]{.underline}](mailto:example@outlook.com). |
|             |                                                        |
|             | d)  Body - Search for an email(s) with an input        |
|             |     keyword in the email body. For example, setting    |
|             |     "BOOKING NO" as the keyword will allow the Orange  |
|             |     Bot to search all emails with "BOOKING NO" in the  |
|             |     email body.                                        |
+-------------+--------------------------------------------------------+
| Search      | The input keyword/email that will be used to search    |
| Value       | the email(s). This will differ based on the Search   |
| (input)     | By:                                                  |
|             |                                                        |
|             | a)  Subject: Input keyword to search any email with a  |
|             |     subject that contains the keyword.                 |
|             |                                                        |
|             | b)  Subject (Exact Match): Input keyword to search any |
|             |     email with a subject that is an exact match with   |
|             |     the keyword.                                       |
|             |                                                        |
|             | c)  Sender Email: Input email address of the sender.   |
|             |                                                        |
|             | d)  Body: Input keyword to search any email with an    |
|             |     email body that contains the keyword.              |
+-------------+--------------------------------------------------------+
| Item Type   | A dropdown list that allows the user to search for the |
| (Dropdown   | type of email, including:                              |
| List)       |                                                        |
|             | a)  All                                                |
|             |                                                        |
|             | b)  Mail Item                                          |
|             |                                                        |
|             | c)  Remote Item                                        |
|             |                                                        |
|             | d)  Report Item                                        |
|             |                                                        |
|             | e)  Sharing Item                                       |
|             |                                                        |
|             | f)  Appointment Item                                   |
|             |                                                        |
|             | g)  Meeting Item                                       |
+-------------+--------------------------------------------------------+

### Subject

#### Objective
To search an email based on the subject.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to find the two Booking Acknowledgement emails. One is
read and one is unread.

#### Steps


if you have never used the Action Library.

1.  Set Search Folder (Choose Inbox, Outbox, Sent Items or Draft)

2.  Set Search Tag (All, Read or Unread)

3.  Set Search By as Subject

4.  Set Search Value as Booking Acknowledgement (Get from Outlook)

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The OrangeBot can find all the emails with the subject Booking
Acknowledgement and finds that there are two emails.

 

### Sender Email

#### Objective
To search email(s) using the sender email.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to find the five emails that were sent by a specific
email. Two are read and three are unread.

#### Steps


1.  Set Search Folder (Choose Inbox, Outbox, Sent Items or Draft)

2.  Set Search Tag (All, Read or Unread)

3.  Set Search By as Sender Email

4.  Set Search Value as the Email you want (Get from Outlook)

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The OrangeBot can find all 5 emails sent by a specific email.

 

### Body

#### Objective
To search email(s) using the sender email. 
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to find the two emails that has the words "BOOKING NO"
in the body. One is read and one is unread.

#### Steps


1.  Set Search Folder (Choose Inbox, Outbox, Sent Items or Draft)

2.  Set Search Tag (All, Read or Unread)

3.  Set Search By as Body

4.  Set Search Value as BOOKING NO (Get from Outlook)

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The OrangeBot can find all 2 emails with BOOKING NO in it's body
text.

 

### Create Email

#### Objective
To create and send an email or save an email as a draft.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Email       | The input Email account that is set in Outlook Desktop |
| Account     | (e.g.                                                  |
| (input)     | [[example@o                                            |
|             | utlook.com]{.underline}](mailto:example@outlook.com)). |
|             | Set as Default for the Default email account in    |
|             | Microsoft Outlook.                                     |
+-------------+--------------------------------------------------------+
| Action Mode | A dropdown list that allows the user to:               |
| (Dropdown   |                                                        |
| List)       | a)  Send - Send the created email.                     |
|             |                                                        |
|             | b)  Save as Draft - Save created email as a draft.     |
+-------------+--------------------------------------------------------+
| To (input)  | The input email address of the Receiver who will       |
|             | receive the created email.                             |
+-------------+--------------------------------------------------------+
| Cc (input)  | Cc refers to people who will receive the email but are |
|             | not the main receivers. The input email address of the |
|             | people who will be cced in the email. There can be     |
|             | more than one email as long as ";" is used (e.g.       |
|             | sample1@gmail.com;sample2@gmail.com;sample3@gmail.com) |
+-------------+--------------------------------------------------------+
| Bcc (input) | Bcc refers to people who will receive the email but    |
|             | will be hidden for security reasons. The input email   |
|             | address of the people who will be bcced in the email.  |
|             | There can be more than one email as long as ";" is     |
|             | used (e.g.                                             |
|             | sample1@gmail.com;sample2@gmail.com;sample3@gmail.com) |
+-------------+--------------------------------------------------------+
| Subject     | The input subject of the created Email. This will be   |
| (input)     | set by the user.                                       |
+-------------+--------------------------------------------------------+
| Body        | The input body of the created Email chosen by the      |
| (input)     | user. This will be set by the user.                    |
+-------------+--------------------------------------------------------+
| Attachment  | The input File Path of the files that the user would   |
| (input)     | want to attach to the created email. There can be more |
|             | than one as long as ";" is used (e.g.                  |
|             | C:\\Users\\InsiteMY\\Downloads\\sample1.p              |
|             | df;\"C:\\Users\\InsiteMY\\Downloads\\Untitled.png\"\\) |
+-------------+--------------------------------------------------------+

### Send

#### Objective
To create and send an email with an attachment.

Before: This is the file we need to attach it to the email.

#### Steps


1.  Set Email Account (Sender)

2.  Set Action Mode as Send

3.  Set To as the email for the recipient

4.  Set Subject

5.  Set Body

6.  Set Attachment as the file path for the PDF

7.  Set Signature (Name is the one saved in your Outlook under
    Signature)

All fields not seen here do not need to be filled.

After: The OrangeBot sends an email with the attachment.

 

### Save as Draft

#### Objective
To create an email draft with an attachment.

Before: This is the file we need to attach it to the email.

#### Steps

1.  Set Action Mode as Save as Draft

2.  Set To as the email for the recipient

3.  Set Subject

4.  Set Body

5.  Set Attachment as the file path for the PDF

All fields not seen here do not need to be filled.

After: The OrangeBot creates an email draft with the attachment.

 

### Reply Email

#### Objective
To reply to an email.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Email       | The input Email account that is set in Outlook Desktop |
| Account     | (e.g.                                                  |
| (input)     | [[example@o                                            |
|             | utlook.com]{.underline}](mailto:example@outlook.com)). |
|             | Set as Default for the Default email account in    |
|             | Microsoft Outlook.                                     |
+-------------+--------------------------------------------------------+
| Email       | A dropdown list that allows the user to reply an email |
| Folder      | in the Email folder:                                   |
| (Dropdown   |                                                        |
| List)       | a)  Inbox                                              |
|             |                                                        |
|             | b)  Outbox                                             |
|             |                                                        |
|             | c)  Sent Items                                         |
|             |                                                        |
|             | d)  Deleted Items                                      |
|             |                                                        |
|             | e)  Managed Items                                      |
|             |                                                        |
|             | f)  Calendar                                           |
|             |                                                        |
|             | g)  Conflicts                                          |
|             |                                                        |
|             | h)  Contacts                                           |
|             |                                                        |
|             | i)  Drafts                                             |
|             |                                                        |
|             | j)  Journal                                            |
|             |                                                        |
|             | k)  Junk                                               |
|             |                                                        |
|             | l)  Local Failures                                     |
|             |                                                        |
|             | m)  Notes                                              |
|             |                                                        |
|             | n)  Rss Feeds                                          |
|             |                                                        |
|             | o)  Server Failures                                    |
+-------------+--------------------------------------------------------+
| Subject     | The input subject of the Email being replied to. This  |
| Indicator   | will be set by the user.                               |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| To (input)  | The input email address of the Receiver who will       |
|             | receive the created email.                             |
+-------------+--------------------------------------------------------+
| Cc (input)  | Cc refers to people who will receive the email but are |
|             | not the main receivers. The input email address of the |
|             | people who will be cced in the email. There can be     |
|             | more than one email as long as ";" is used (e.g.       |
|             | sample1@gmail.com;sample2@gmail.com;sample3@gmail.com) |
+-------------+--------------------------------------------------------+
| New Subject | The input subject of the newly created Email. This     |
| (input)     | will be set by the user.                               |
+-------------+--------------------------------------------------------+
| New Body    | The input body of the newly created Email chosen by    |
| (input)     | the user. This will be set by the user.                |
+-------------+--------------------------------------------------------+
| New         | The input File Path of the files that the user would   |
| Attachment  | want to attach to the newly created email. There can   |
| (input)     | be more than one as long as ";" is used (e.g.          |
|             | C:\\Users\\InsiteMY\\Downloads\\sample1.p              |
|             | df;\"C:\\Users\\InsiteMY\\Downloads\\Untitled.png\"\\) |
+-------------+--------------------------------------------------------+

Before: We need to reply to this email.

#### Steps

1.  Set Email Folder for the correct folder

2.  Set Subject Indicator (Get from Email)

3.  Set To as the email for the recipient

4.  Set New Subject

5.  Set New Body

All fields not seen here do not need to be filled.

After: The OrangeBot sends an email.

 

### Save Email

You need to get the email using Search Email.
#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Email Entry | The email that was found after using the Search      |
| ID (input)  | Email task. Do not edit or remove.               |
|             | \@OutlookResult@0@ refers to the first email found     |
|             | after using the Search Email task. \@OutlookResult@    |
|             | refers to all the emails found and \@0@ refers to the  |
|             | 1st email found.                                       |
+-------------+--------------------------------------------------------+
| Format      | A dropdown list that allows the user to download the   |
| (Dropdown   | email as a:                                            |
| List)       |                                                        |
|             | a)  .msg - A MSG file.                                 |
|             |                                                        |
|             | b)  .txt - A text file.                                |
|             |                                                        |
|             | c)  .rtf - A Rich Text Format file.                    |
|             |                                                        |
|             | d)  .oft - An Outlook Form Template file.              |
|             |                                                        |
|             | e)  .doc - A Word file                                 |
|             |                                                        |
|             | f)  .html - A HTML file                                |
|             |                                                        |
|             | g)  .mht - A Microsoft Hypertext Archive file          |
+-------------+--------------------------------------------------------+
| Save Path   | The input path of a Folder chosen by the user where    |
| (input)     | the OrangeBot will download the email.                 |
+-------------+--------------------------------------------------------+

#### Objective
To download an Email.\
First, create this script:

Before: We need to download this email.

#### Steps

Search Email
1.  Set Email Account as Default

2.  Set Search Folder (Choose Inbox)

3.  Set Search Tag (All)

4.  Set Search By as Subject

5.  Set Search Value as Outlook Table Testing (Get from Outlook)

Save Email
1.  Set Format (this is up to you)

2.  Set Save Path as the folder path where the email will be downloaded
    (put a "/" at the end).

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot downloaded the email.

 

### Save Email Attachment

You need to get the email using Search Email.\
Objective: To download an email attachment from an email.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Email Entry | The email that was found after using the Search      |
| ID (input)  | Email task. Do not edit or remove.               |
|             | \@OutlookResult@0@ refers to the first email found     |
|             | after using the Search Email task. \@OutlookResult@    |
|             | refers to all the emails found and \@0@ refers to the  |
|             | 1st email found.                                       |
+-------------+--------------------------------------------------------+
| Extension   | An input text for a file extension so the OrangeBot    |
| (input)     | downloads the email attachment. For example, if the    |
|             | input is ".xlsx", the OrangeBot will download all      |
|             | Excel files attached to the email. The user can        |
|             | download any type of file as long as they have the     |
|             | file extension. Examples include:                      |
|             |                                                        |
|             | a)  .docx - Word                                       |
|             |                                                        |
|             | b)  .txt - TXT file                                    |
|             |                                                        |
|             | c)  .pptx - Powerpoint                                 |
|             |                                                        |
|             | d)  .zip - Zip File                                    |
|             |                                                        |
|             | e)  .png - Image                                       |
|             |                                                        |
|             | f)  Etc.                                               |
|             |                                                        |
|             | You can get the file extensions by referring to this   |
|             | list (click                                            |
|             | [here](https://suppo                                   |
|             | rt.microsoft.com/en-us/windows/common-file-name-extens |
|             | ions-in-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01)) |
+-------------+--------------------------------------------------------+
| Save Path   | The input path of a Folder chosen by the user where    |
| (input)     | the OrangeBot will download the email attachment.      |
+-------------+--------------------------------------------------------+

First, create this script:

Before: We need to download the PDF from the email.

We need to download the PDF from the email.

#### Steps
Search Email
1.  Set Email Account as Default.

2.  Set Search Folder (Choose Inbox).

3.  Set Search Tag (All).

4.  Set Search By as Subject.

5.  Set Search Value as Testing Email (Get from Outlook).

Save Email Attachment
1.  Set Extension as ".pdf" (depends on the attachment)

2.  Set Save Path as the folder path where the email will be downloaded
    (put a "\\" at the end).

All fields not seen here do not need to be filled.



After: Result shows that the OrangeBot downloaded the attachment.

 

### Get Email Info

#### Objective
To get the info regarding an email.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Email Entry | The email that was found after using the Search      |
| ID (input)  | Email task. Do not edit or remove.               |
|             | \@OutlookResult@0@ refers to the first email found     |
|             | after using the Search Email task. \@OutlookResult@    |
|             | refers to all the emails found and \@0@ refers to the  |
|             | 1st email found.                                       |
+-------------+--------------------------------------------------------+
| Field Name  | A dropdown list that allows the user to extract info   |
| (Dropdown   | regarding:                                             |
| List)       |                                                        |
|             | a)  Attachment Count                                   |
|             |                                                        |
|             | b)  Bcc                                                |
|             |                                                        |
|             | c)  Cc                                                 |
|             |                                                        |
|             | d)  Content Html                                       |
|             |                                                        |
|             | e)  Content Text                                       |
|             |                                                        |
|             | f)  Sender                                             |
|             |                                                        |
|             | g)  Sender Name                                        |
|             |                                                        |
|             | h)  Sent Date                                          |
|             |                                                        |
|             | i)  Subject                                            |
|             |                                                        |
|             | j)  Recipient                                          |
|             |                                                        |
|             | k)  Received Date                                      |
|             |                                                        |
|             | l)  Url Link in Content                                |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### Attachment Count

You need to get the email using Search Email.

#### Objective

To get the number of Attachments in an email.


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Bcc information from this unread email.

You need to create a new Global Variable.

#### Steps

Search Email
6.  Set Email Account as Default.

7.  Set Search Folder (Choose Inbox).

8.  Set Search Tag (All).

9.  Set Search By as Subject.

10. Set Search Value as Testing Email (Get from Outlook).

Get Email Info
1.  Set Field Name as Attachment Count

2.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the email has one attachment.

 

### Bcc

You need to get the email using Search Email.

#### Objective
To get the Bcc email from an email.\
\
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Bcc information from this email.

You need to create a new Global Variable.

#### Steps

Search Email
11. Set Email Account as Default.

12. Set Search Folder (Choose Inbox).

13. Set Search Tag (All).

14. Set Search By as Subject.

15. Set Search Value as Testing Email (Get from Outlook).

Get Email Info
1.  Set Field Name as Bcc

2.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Bcc email
information.

 

### Cc

You need to get the email using Search Email.

#### Objective
To get the Cc email from an email.\

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Cc information from this email.

You need to create a new Global Variable.

#### Steps

Search Email
16. Set Email Account as Default.

17. Set Search Folder (Choose Inbox).

18. Set Search Tag (All).

19. Set Search By as Subject.

20. Set Search Value as Testing Email (Get from Outlook).

Get Email Info
1.  Set Field Name as Cc

2.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Cc email
information.

 

### Content HTML

You need to get the email using Search Email.

#### Objective
To get the Content Html information from an email.\

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Content Html information from this unread
email.

You need to create a new Global Variable.

#### Steps

Search Email
21. Set Email Account as Default.

22. Set Search Folder (Choose Inbox).

23. Set Search Tag (All).

24. Set Search By as Subject.

25. Set Search Value as Testing Email (Get from Outlook).

Get Email Info
1.  Set Field Name as Content Html

2.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Content Html email
information.

 

### Content Text

You need to get the email using Search Email.

#### Objective
To get the Content Text from an email.\
\
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Content Text from this email.

You need to create a new Global Variable.

#### Steps

Search Email
26. Set Email Account as Default.

27. Set Search Folder (Choose Inbox).

28. Set Search Tag (All).

29. Set Search By as Subject.

30. Set Search Value as Testing Email (Get from Outlook).

Get Email Info
1.  Set Field Name as Content Text

2.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Content Text email
information.

 

### Sender

You need to get the email using Search Email.

#### Objective
To get the Sender email from an email. 

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Sender Email from this email.

You need to create a new Global Variable.

#### Steps

Search Email
31. Set Email Account as Default.

32. Set Search Folder (Choose Inbox).

33. Set Search Tag (All).

34. Set Search By as Subject.

35. Set Search Value as Testing Email (Get from Outlook).

Get Email Info\

1.  Set Field Name as Sender

2.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Sender email
information.

 

### Sender Name

You need to get the email using Search Email.

#### Objective
To get the Sender Name from an email. 
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Sender Name from this email.

You need to create a new Global Variable.

#### Steps

Search Email
36. Set Email Account as Default.

37. Set Search Folder (Choose Inbox).

38. Set Search Tag (All).

39. Set Search By as Subject.

40. Set Search Value as Testing Email (Get from Outlook).

Get Email Info\

1.  Set Field Name as Sender Name

2.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Sender Name
information.

 

### Sender Date

You need to get the email using Search Email.

#### Objective
To get the Sent Date from an email.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Sent Date from this email.

You need to create a new Global Variable.

#### Steps

Search Email
41. Set Email Account as Default.

42. Set Search Folder (Choose Inbox).

43. Set Search Tag (All).

44. Set Search By as Subject.

45. Set Search Value as Testing Email (Get from Outlook).

Get Email Info\

1.  Set Field Name as Sent Date

2.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved when and what time the
email was sent.

 

### Subject

You need to get the email using Search Email.

#### Objective
To get the Subject from an email.



Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Subject from this email.

You need to create a new Global Variable.

#### Steps

Search Email
46. Set Email Account as Default.

47. Set Search Folder (Choose Inbox).

48. Set Search Tag (All).

49. Set Search By as Subject.

50. Set Search Value as Testing Email (Get from Outlook).

Get Email Info\

1.  Set Field Name as Subject

2.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Subject
information.

 

### Recipient

You need to get the email using Search Email.

#### Objective
To get the Recipient information from an email.


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Recipient information from this email.

You need to create a new Global Variable.

#### Steps

Search Email
51. Set Email Account as Default.

52. Set Search Folder (Choose Inbox).

53. Set Search Tag (All).

54. Set Search By as Subject.

55. Set Search Value as Testing Email (Get from Outlook).

Get Email Info\

1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Recipient

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Recipient
information.

 

### Received Date

You need to get the email using Search Email.

#### Objective
To get the Received Date information from an email.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Received Date information from this email.

You need to create a new Global Variable.

#### Steps

Search Email
56. Set Email Account as Default.

57. Set Search Folder (Choose Inbox).

58. Set Search Tag (All).

59. Set Search By as Subject.

60. Set Search Value as Testing Email (Get from Outlook).

Get Email Info\

1.  Set Email Name (Get from Gateway Configuration)

2.  Set Field Name as Received Date

3.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has saved the Received Date
information.

 

### Get Email Table

You need to get the email using Search Email.

#### Objective
To get a table from an email.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Email Entry ID The email that was found after using the Search
  (input)        Email task. Do not edit or remove.
                 \@OutlookResult@0@ refers to the first email found after
                 using the Search Email task. \@OutlookResult@ refers to
                 all the emails found and \@0@ refers to the 1st email
                 found.

  Table\'s       The input keyword from the Table Header.
  Header (input) 

  Table\'s       The input keyword below the table so the OrangeBot will
  Footer (input) know where the end of the table is.

  Column Count   The input number of columns in the table
  (input)        

  Result Remove  This allows the user to remove the first row of the
  First Row?     table from the result. Input Yes to remove the first
  (input)        row, or input No if not needed.

  Result Remove  This allows the user to remove the last row of the table
  Last Row?      from the result. Input Yes to remove the last row,
  (input)        or input No if not needed.
  -------------- --------------------------------------------------------


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the table from the email.

#### Steps

Search Email
1.  Set Email Account as Default.

2.  Set Search Folder (Choose Inbox).

3.  Set Search Tag (All).

4.  Set Search By as Subject.

5.  Set Search Value as Testing Email (Get from Outlook).

Get Email Table
1.  Set Table's Header (Get from Email)

2.  Set Column Count (Get from Email)

3.  Set Result Remove First Row

4.  Set Result Remove Last Row

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the email table
information.



### Get Content Value

You need to get the email using Search Email.

#### Objective
To extract text value from an Email.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Email Entry | The email that was found after using the Search      |
| ID (input)  | Email task. Do not edit or remove.               |
|             | \@OutlookResult@0@ refers to the first email found     |
|             | after using the Search Email task. \@OutlookResult@    |
|             | refers to all the emails found and \@0@ refers to the  |
|             | 1st email found.                                       |
+-------------+--------------------------------------------------------+
| Line        | The input keyword for the OrangeBot to extract the     |
| Keyword     | text below the keyword. For example, if this is    |
| (input)     | the email body:\                                       |
|             | \                                                      |
|             | Contact Number\                                      |
|             | 01234567                                             |
|             |                                                        |
|             | If the input keyword is "Contact Number", then it  |
|             | will extract the text below which is "01234567".   |
+-------------+--------------------------------------------------------+
| Sentence    | The input keyword for the OrangeBot to extract the     |
| Keyword     | text next to the keyword. For example, if this is  |
| (input)     | the email body:\                                       |
|             | \                                                      |
|             | Contact Number 01234567                            |
|             |                                                        |
|             | If the input keyword is "Contact Number", then it  |
|             | will extract the text next to it, which is             |
|             | "01234567".                                        |
+-------------+--------------------------------------------------------+
| Result      | This is optional. This is the input keyword where  |
| Start At    | the OrangeBot will start to extract the text data. For |
| (input)     | example, if this is the email body:\                   |
|             | \                                                      |
|             | +601234567                                         |
|             |                                                        |
|             | If the input keyword is "+", then it will extract  |
|             | the text "+601234567".                             |
+-------------+--------------------------------------------------------+
| Result End  | This is optional. This is the input keyword where  |
| At (input)  | the OrangeBot will stop extracting the text data. For  |
|             | example, if this is the email body:\                   |
|             | \                                                      |
|             | +601234567 or example@gmail.com                    |
|             |                                                        |
|             | If the input keyword is "or", then it will stop    |
|             | extracting the text after "or" and the result will be  |
|             | "+601234567".                                      |
+-------------+--------------------------------------------------------+
| Result      | This is optional. This is the input keyword or     |
| Filter      | character where the OrangeBot will remove from the     |
|             | result. For example, if this is the email body:\       |
|             | \                                                      |
|             | +601234567                                         |
|             |                                                        |
|             | If the input keyword is "+", then it will remove   |
|             | the character and the result will be "601234567".  |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

###  Lines Keyword

#### Objective
To extract text value below a keyword from an Email.


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Port of Discharge text from the Email.


Search Email
1.  Set Email Account as Default.

2.  Set Search Folder (Choose Inbox).

3.  Set Search Tag (All).

4.  Set Search By as Subject.

5.  Set Search Value as Booking Acknowledgement (Get from Outlook).

Get Content Value\

1.  Set Line Keyword as "PORT OF LOADING" (Get from Email)

2.  Set Result End at as ",".

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Text information.

### Sentence Keyword

#### Objective
To extract text value next to a keyword from an Email.\


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Port of Discharge text from the Email.

#### Steps

Search Email
6.  Set Email Account as Default.

7.  Set Search Folder (Choose Inbox).

8.  Set Search Tag (All).

9.  Set Search By as Subject.

10. Set Search Value as Booking Acknowledgement (Get from Outlook).

Get Content Value\

4.  Set Sentence Keyword as "PORT OF DISCHARGE" (Get from Email)

5.  Set Result End at as ",".

6.  Set Result Filter as ":".

7.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Text information.



### Open Outlook

#### Objective
To open Outlook.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input Description to describe the task.
  Description    
  (input)        
  -------------- --------------------------------------------------------

 

#### Steps
1.  Set Task Order & Description.

All fields not seen here do not need to be filled.

### Close Outlook

#### Objective
To close Outlook.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        
  -------------- --------------------------------------------------------

 

#### Steps
1.  Set Task Order & Description.

All fields not seen here do not need to be filled.

### Move Email

You need to get the email using Search Email.

#### Objective
To move an email to another folder.

#### Table Field
  -------------- -------------------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe the task.
  Description    This is optional.
  (input)        

  Email Entry ID The email that was found after using the Search Email task.
  (input)        Do not edit or remove. \@OutlookResult@0@ refers to the first
                 email found after using the Search Email task. \@OutlookResult@
                 refers to all the emails found and \@0@ refers to the 1st email
                 found.

  Target Account The input Email account that is set in Outlook Desktop (e.g.
  (input)        [[example@outlook.com]{.underline}](mailto:example@outlook.com)).
                 Set as Default for the Default email account in Microsoft
                 Outlook.

  Target Folder  The input folder where the OrangeBot will move the email to. For
  (input)        example, if the input is "Inbox.Junk", it will move the email to
                 the Junk folder.
  -------------- -------------------------------------------------------------------

First, create this script:

Before: We need to move this email to Drafts.

#### Steps


Search Email
1.  Set Email Account as Default.

2.  Set Search Folder (Choose Inbox).

3.  Set Search Tag (All).

4.  Set Search By as Subject.

5.  Set Search Value as Testing (Get from Outlook).

Move Email
1.  Set Target Account (can be Default, or put your email).

2.  Set Target Folder as Inbox."FolderName".

All fields not seen here do not need to be filled.

After: OrangeBot moved the email to the Drafts folder.

## PDF Command

### Get Form Field Value

#### Objective
To extract text data from the PDF and save it in a Global
Variable.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| PDF Path    | The input path of the PDF file.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Delimiter   | The input text or character that the OrangeBot will    |
| (input)     | use to extract the data. For example if the PDF text   |
|             | is,                                                    |
|             |                                                        |
|             | BOOKING NO - OOLV147985                            |
|             |                                                        |
|             | If the delimiter is set as "-", the OrangeBot will |
|             | extract "OOLV147985".                              |
+-------------+--------------------------------------------------------+
| Field Name  | The input keyword that the OrangeBot will use to       |
| (input)     | locate the text data to extract.                       |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The PDF "Shipping Instruction has the information regarding the
Booking No.

You need to create a new Global Variable.

#### Steps

1.  Set PDF Path

2.  Set Delimiter

3.  Set Field Name (Get from PDF)

4.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the Booking No information saved in the Global
Variable.

 

### Get Text Info

#### Objective
To extract info regarding a specific text value in a PDF
file.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| PDF Path    | The input path of the PDF file.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Text to     | The input keyword in the PDF file for the OrangeBot to |
| Search      | extract data regarding.                                |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Info Type   | This dropdown list allows the user to extract data     |
| (Dropdown   | regarding:                                             |
| List)       |                                                        |
|             | a)  Page Number                                        |
|             |                                                        |
|             | b)  Position                                           |
|             |                                                        |
|             | c)  Text                                               |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### Page Number

#### Objective
To get the Page No of "Port of Loading" inside the PDF.


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The PDF has the information regarding the "Port of Loading".

You need to create a new Global Variable.

#### Steps

1.  Set PDF Path

2.  Set Text to Search (Get from PDF)

3.  Set Info Type as Page Number

4.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the "Port of Loading" information is on Page 1.

 

### Position

#### Objective
To get the X and Y location of "Shipper" inside the PDF.


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The PDF has the information regarding the "Shipper".

You need to create a new Global Variable.

#### Steps

1.  Set PDF Path

2.  Set Text to Search (Get from PDF)

3.  Set Info Type as Position

4.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the X and Y location of the "Shipper" information.

 

### Text

#### Objective
To get the text "Consignee" in the PDF.

Before: The PDF has the text "Consignee".

You need to create a new Global Variable.

#### Steps

1.  Set PDF Path

2.  Set Text to Search (Get from PDF)

3.  Set Info Type as Text

4.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the text "Consignee" from the PDF.



### Get Text (Horizon)

#### Objective
Horizon means Left and Right. The OrangeBot will extract
data based on an input keyword. The data to be extracted will be at the
left or the right side of the keyword.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| PDF Path    | The input path of the PDF file.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Start Page  | The input first page of the PDF file.                  |
| No (input)  |                                                        |
+-------------+--------------------------------------------------------+
| End Page No | The input last page of the PDF file.                   |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Text to     | The input keyword in the PDF file for the OrangeBot to |
| Search      | extract data regarding.                                |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Section     | This is optional. This is an input keyword that    |
| Name(s)     | the OrangeBot will use to find the Field Name      |
| (input)     | below it. This makes it easier for the OrangeBot to    |
|             | search for the Field Name, so it will only search for  |
|             | below the Section Name instead of the entire PDF file. |
+-------------+--------------------------------------------------------+
| Field Name  | The input keyword that the OrangeBot will use to       |
| (s) (input) | locate the text data to extract.                       |
+-------------+--------------------------------------------------------+
| Result End  | This is optional. This is the input keyword where  |
| Before(s)   | the OrangeBot will stop extracting the text data. For  |
|             | example, if this is the email body:\                   |
|             | \                                                      |
|             | +601234567 or example@gmail.com                    |
|             |                                                        |
|             | If the input keyword is "or", then it will stop    |
|             | extracting the text after "or" and the result will be  |
|             | "+601234567".                                      |
+-------------+--------------------------------------------------------+
| Result      | This dropdown list allows the user to extract data at  |
| Position    | the:                                                   |
| (Dropdown   |                                                        |
| List)       | a)  Left - At the left side of the Field Name.     |
|             |                                                        |
|             | b)  Right - At the right side of the Field Name.   |
+-------------+--------------------------------------------------------+
| Character   | This is optional. This is the input keyword or     |
| to Trim     | character where the OrangeBot will remove from the     |
| (input)     | result. For example, if this is the email body:        |
|             |                                                        |
|             | +601234567                                         |
|             |                                                        |
|             | If the input keyword is "+", then it will remove   |
|             | the character and the result will be "601234567".  |
+-------------+--------------------------------------------------------+
| Multi Line  | This dropdown list allows the user to extract data     |
| (Dropdown   | from multiple lines. Set Yes if the result has     |
| List)       | multiple lines. Set No if No.                      |
+-------------+--------------------------------------------------------+
| Multi       | This dropdown list allows the user to extract multiple |
| Result      | result text if there is more than one. For example, if |
| (Dropdown   | there is more than one copy of the Field Name:         |
| List)       |                                                        |
|             | Booking No: OOLV147985                                 |
|             |                                                        |
|             | Booking No: ABCD123456                                 |
|             |                                                        |
|             | Then the OrangeBot will extract both Booking Nos.      |
|             |                                                        |
|             | Set Yes if there are multiple results. Set No  |
|             | if No.                                                 |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### Horizon Default

#### Objective
To extract text data based on keywords from left to right and
save it in a Global Variable.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The "Bill To" information has text that needs to be saved.

You need to create a new Global Variable.

#### Steps

1.  Set PDF Path

2.  Set Page Number

3.  Set Search Mode as Field Value (Horizon)

4.  Set Field Name as Bill to (Get from PDF)

5.  Set Value End At as Ship-to

6.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the text for "Bill to".

 

### Horizon Multi Results

#### Objective 

To get multiple text results based on keywords from left to right and
save it in a Global Variable.

First, create this script:

Before: There are multiple "Bill To" information that needs to be saved.

You need to create a new Global Variable.

#### Steps 
Get Text (Horizon)
1.  Set PDF Path

2.  Set Page Number

3.  Set Search Mode as Field Value (Horizon) Multi Results

4.  Set Field Name as Bill to (Get from PDF)

5.  Set Value End At as Ship-to

6.  Set Gvariable to Save

So the Bot will scan from left to right, in between Bill to and Ship-to
for both.

All fields not seen here do not need to be filled.

Message Box

1.  Set Task Order & Description (Up to you)

2.  Set Message to Display (@Horizon@0@ equals the first value.
    \@Horizon@1@ equals the second value)

All fields not seen here do not need to be filled.

This is not needed, this is just to show how the PDF Command saves the
information in the Global Variable,

After: Result shows the multiple text results for "Bill to".

 

### Get Text (Vertical)

#### Objective
Vertical means Up and Down. The OrangeBot will extract
data based on an input keyword. The data to be extracted will be at the
left or the right side of the keyword.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| PDF Path    | The input path of the PDF file.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Start Page  | The input first page of the PDF file.                  |
| No (input)  |                                                        |
+-------------+--------------------------------------------------------+
| End Page No | The input last page of the PDF file.                   |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Text to     | The input keyword in the PDF file for the OrangeBot to |
| Search      | extract data regarding.                                |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Section     | This is optional. This is an input keyword that    |
| Name(s)     | the OrangeBot will use to find the Field Name      |
| (input)     | below it. This makes it easier for the OrangeBot to    |
|             | search for the Field Name, so it will only search for  |
|             | below the Section Name instead of the entire PDF file. |
+-------------+--------------------------------------------------------+
| Field Name  | The input keyword that the OrangeBot will use to       |
| (s) (input) | locate the text data to extract.                       |
+-------------+--------------------------------------------------------+
| Result End  | This is optional. This is the input keyword where  |
| Before(s)   | the OrangeBot will stop extracting the text data. For  |
|             | example, if this is the email body:\                   |
|             | \                                                      |
|             | +601234567 or example@gmail.com                    |
|             |                                                        |
|             | If the input keyword is "or", then it will stop    |
|             | extracting the text after "or" and the result will be  |
|             | "+601234567".                                      |
+-------------+--------------------------------------------------------+
| Result      | This dropdown list allows the user to extract data at  |
| Position    | the:                                                   |
| (Dropdown   |                                                        |
| List)       | a)  Down - Below the Field Name.                   |
|             |                                                        |
|             | b)  Up - Above the Field Name.                     |
+-------------+--------------------------------------------------------+
| Character   | This is optional. This is the input keyword or     |
| to Trim     | character where the OrangeBot will remove from the     |
| (input)     | result. For example, if this is the email body:        |
|             |                                                        |
|             | +601234567                                         |
|             |                                                        |
|             | If the input keyword is "+", then it will remove   |
|             | the character and the result will be "601234567".  |
+-------------+--------------------------------------------------------+
| Multi Line  | This dropdown list allows the user to extract data     |
| (Dropdown   | from multiple lines. Set Yes if the result has     |
| List)       | multiple lines. Set No if No.                      |
+-------------+--------------------------------------------------------+
| Multi       | This dropdown list allows the user to extract multiple |
| Result      | result text if there is more than one. For example, if |
| (Dropdown   | there is more than one copy of the Field Name:         |
| List)       |                                                        |
|             | Booking No:\                                           |
|             | OOLV147985                                             |
|             |                                                        |
|             | Booking No:\                                           |
|             | ABCD123456                                             |
|             |                                                        |
|             | Then the OrangeBot will extract both Booking Nos.      |
|             |                                                        |
|             | Set Yes if there are multiple results. Set No  |
|             | if No.                                                 |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

 

### Vertical Default

#### Objective
To get the text result based on keywords from up to down and
save it in a Global Variable.


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The Company Name information has text that needs to be saved.

You need to create a new Global Variable.

#### Steps 

1.  Set PDF Path

2.  Set Page Number

3.  Set Search Mode as Field Value (Vertical)

4.  Set Field Name as Bill to (Get from PDF)

5.  Set Value End At as Ship-to

6.  Set Gvariable to Save

So the Bot will scan from up to down, below Bill to.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the text for the Company Name.

 

### Vertical Multi Lines

#### Objective
To get the Company address based on keywords from up to down
for multiple lines and save it in a Global Variable.



Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The Company address information has text that needs to be saved.

You need to create a new Global Variable.

#### Steps

1.  Set PDF Path

2.  Set Page Number

3.  Set Search Mode as Field Value (Vertical Multi Lines)

4.  Set Field Name as Bill to (Get from PDF)

5.  Set Value End At as VAT

6.  Set Gvariable to Save

So the Bot will scan from up to down, below Bill to and above VAT.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the text for the Company Address.

 

### Vertical Multi Results

#### Objective
To get multiple text results based on keywords from up to
down and save it in a Global Variable.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

There are multiple "Company Name" information has text that needs to be
saved.

You need to create a new Global Variable.

#### Steps

Get Text (Vertical)
1.  Set PDF Path

2.  Set Page Number

3.  Set Search Mode as Field Value (Vertical Multi Lines)

4.  Set Field Name as Bill to (Get from PDF)

5.  Set Gvariable to Save

So the Bot will scan from left to right, in below Bill to for both.

All fields not seen here do not need to be filled.

Message Box
1.  Set Task Order & Description (Up to you)

2.  Set Message to Display (@Vertical@0@ equals the first value. @
    Vertical \@1@ equals the second value)

All fields not seen here do not need to be filled.

This is not needed, this is just to show how the PDF Command saves the
information in the Global Variable.

After: Result shows the multiple text results for Company Name.

 

### Vertical Multi Lines & Multi Results

#### Objective
To get multiple text results based on keywords from up to
down and save it in a Global Variable.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: There are multiple "Company Name" information has text that
needs to be saved.

You need to create a new Global Variable.

#### Steps 

Get Text (Vertical)
1.  Set PDF Path

2.  Set Page Number

3.  Set Search Mode as Field Value (Vertical) Multi Lines & Results

4.  Set Field Name as Bill to (Get from PDF)

5.  Set Value End At as VAT (Get from PDF)

6.  Set Gvariable to Sav

So the Bot will scan from left to right, in between Bill to and VAT for
both.

All fields not seen here do not need to be filled.

Message Box
1.  Set Task Order & Description (Up to you)

2.  Set Message to Display (@Vertical@0@ equals the first value. @
    Vertical \@1@ equals the second value)

All fields not seen here do not need to be filled.

This is not needed, this is just to show how the PDF Command saves the
information in the Global Variable.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the multiple text results for Company Address.

 

### Split PDF

#### Objective
To split a PDF into multiple separate PDFs.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| PDF Path    | The input path of the PDF file.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Output      | The input path of the folder which will hold all the   |
| Folder      | split PDFs.                                            |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Output File | The input name of the PDF files after the original PDF |
| Name        | has been split. For example, if there are multiple PDF |
| (input)     | files after splitting, and the File Name is set as     |
|             | "Customer", then the name of the PDFs will be Customer |
|             | 1, Customer 2, etc.                                    |
+-------------+--------------------------------------------------------+
| Split Mode  | This dropdown list allows the user to split the PDF:   |
| (Dropdown   |                                                        |
| List)       | a)  By Header & Footer                                 |
|             |                                                        |
|             | b)  Extract Pages                                      |
|             |                                                        |
|             | c)  Fixed Page Ranges                                  |
+-------------+--------------------------------------------------------+
| Header (By  | This is used if Split Mode is By Header &            |
| Header &    | Footer.This is the input keyword for the start of    |
| Footer)     | the PDF to start splitting.                            |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Footer (By  | This is used if Split Mode is By Header &            |
| Header &    | Footer.This is the input keyword for the end of the  |
| Footer)     | PDF to stop splitting.                                 |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Custom      | This is used if Split Mode is Extract Pages. This  |
| Range       | is the input page numbers that the OrangeBot will      |
| (Extract    | extract. For example:                                  |
| Pages)      |                                                        |
| (input)     | "2-3,5"                                            |
|             |                                                        |
|             | If this is the input, the OrangeBot will extract pages |
|             | 2 to 3 as 1 PDF, and page 5 as another PDF.            |
+-------------+--------------------------------------------------------+
| Fixed Range | This is used if Split Mode is Fixed Page Ranges.   |
| (Fixed Page | This is the input range of pages that the OrangeBot    |
| Ranges)     | will extract for each PDF. For example:                |
| (input)     |                                                        |
|             | "2"                                                |
|             |                                                        |
|             | If this is the input, the OrangeBot will page 1 to 2   |
|             | as a single PDF, page 3 to 4 as a single PDF, etc..    |
+-------------+--------------------------------------------------------+

### By Header & Footer

"Statement of Accounts" PDF is in the "Exception File" folder. There is
an empty folder called "SOA".

Before: There are 3 pages in this PDF Invoice. Each page has a separate
invoice. Take note of the Header \"Statement of Accounts\".

Before: There are 3 pages in this PDF Invoice. Each page has a separate
invoice. Take note of the Footer \"Thank you for your business\".

#### Steps

1.  Set PDF Path (for "Statement of Accounts" Path)

2.  Set Output Folder (for "SOA" folder)

3.  Set Output File Name.

4.  Set Split Mode as By Header & Footer

5.  Set Header (By Header & Footer).

6.  Set Footer (By Header & Footer).

All fields not seen here do not need to be filled.

After: Result shows three new PDF files created in the "SOA" folder
which was split from the main PDF which has three pages.

 

### Extract Pages

"Statement of Accounts" PDF is in the "Exception File" folder. There is
an empty folder called "SOA".

Before: There are 3 pages in this PDF Invoice. Each page has a separate
invoice. Take note of the Header \"Statement of Accounts\".

Before: There are 3 pages in this PDF Invoice. Each page has a separate
invoice. Take note of the Footer \"Thank you for your business\".

#### Steps

1.  Set PDF Path (for "Statement of Accounts" Path)

2.  Set Output Folder (for "SOA" folder)

3.  Set Output File Name.

4.  Set Split Mode as Extract Pages

5.  Set Custom Range

All fields not seen here do not need to be filled.

After: Result shows two new PDF files created in the "SOA" folder which
was split from the main PDF to extract two PDFs.

 

### Fixed Page Ranges

"Statement of Accounts" PDF is in the "Exception File" folder. There is
an empty folder called "SOA".

Before: There are 3 pages in this PDF Invoice. Each page has a separate
invoice. Take note of the Header \"Statement of Accounts\".

Before: There are 3 pages in this PDF Invoice. Each page has a separate
invoice. Take note of the Footer \"Thank you for your business\".

#### Steps 

6.  Set PDF Path (for "Statement of Accounts" Path)

7.  Set Output Folder (for "SOA" folder)

8.  Set Output File Name.

9.  Set Split Mode as Extract Pages

10. Set Custom Range

All fields not seen here do not need to be filled.

After: Result shows two new PDF files created in the "SOA" folder which
was split from the main PDF to extract two PDFs.

### Merge PDF Files

#### Objective
To combine multiple separate PDFs into one PDF.

#### Table Field
  -------------- -----------------------------------------------------------------------------------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe the task. This is optional.
  Description    
  (input)        

  Input Files    The input paths of the PDF files to merge together. This can be as many PDFs as the user desires as long as ";" is used. For
  (input)        example,\
                 C:\\Users\\InsiteMY\\Desktop\\Example1.pdf;C:\\Users\\InsiteMY\\Desktop\\Example2.pdf;C:\\Users\\InsiteMY\\Desktop\\Example3.pdf;

  Output Path    The input path of the final merged PDF.
  (input)        
  -------------- -----------------------------------------------------------------------------------------------------------------------------------

Before: There are multiple PDFs in the "Example 3" folder.

First PDF.

Second PDF

#### Steps

1.  Set the File Paths for all the PDFs inside the Input Files (for
    "Statement of Accounts" Path)

2.  Set Output Path by putting the folder path for "Example 3" and then
    place the name that you choose for the merged pdf before placing the
    ".pdf" extension at the end.

3.  

All fields not seen here do not need to be filled.

After: Result shows two PDFs combined into one PDF that now has two
pages.

 

### Get Field Info

#### Objective
To extract the info regarding a text inside a PDF Form.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| PDF Path    | The input path of the PDF file.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Keyword     | The input keyword in the PDF file for the OrangeBot to |
| (input)     | extract data regarding.                                |
+-------------+--------------------------------------------------------+
| Type        | This dropdown list allows the user to extract data     |
| (Dropdown   | regarding:                                             |
| List)       |                                                        |
|             | a)  Name                                               |
|             |                                                        |
|             | b)  Type                                               |
|             |                                                        |
|             | c)  Position                                           |
|             |                                                        |
|             | d)  Value                                              |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+

### Name

#### Objective
To get the Title (Name) for the text inside a PDF Form.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The PDF has the information regarding "JAI MOHAN".

You need to create a new Global Variable.

#### Steps 

1.  Set PDF Path

2.  Set Keyword (Get from PDF)

3.  Set Type as Name

4.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the Title for "JAI MOHAN".

 

### Type

#### Objective
To get the type of text for the text inside a PDF Form.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The PDF has the information regarding "JAI MOHAN".

You need to create a new Global Variable.

#### Steps 

1.  Set PDF Path

2.  Set Keyword (Get from PDF)

3.  Set Type as Type

4.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the type of text for "JAI MOHAN".

 

### Position

#### Objective
To get the X and Y Position for the text inside a PDF Form.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The PDF has the information regarding "JAI MOHAN".

You need to create a new Global Variable.

#### Steps 

1.  Set PDF Path

2.  Set Keyword (Get from PDF)

3.  Set Type as Position

4.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the X and Y position of the text for "JAI MOHAN".

 

### Value

#### Objective
To get the text value for "JAI MOHAN" inside a PDF Form.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The PDF has the information regarding "JAI MOHAN".

You need to create a new Global Variable.

#### Steps 

1.  Set PDF Path

2.  Set Keyword (Get from PDF)

3.  Set Type as Value

4.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows text value for "JAI MOHAN".



### Get Field Value

#### Objective
To extract text from a PDF Form.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input Description to describe the task.
  Description    
  (input)        

  PDF Path       The input path of the PDF form.
  (input)        

  Field Name     The input Title in the PDF form for the OrangeBot to
  (input)        extract data regarding. For example, if the Title is
                 "Name", then it will extract data regarding the Name
                 listed in the form.

  Field Type     The input text that represents the type of field the
  (input)        OrangeBot will extract from. Fill in "Text Box" to
                 extract text from the Form.

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------

Before: The Name in Row 1 has text that needs to be saved.

You need to create a new Global Variable.

#### Steps 
1.  Set PDF Path

2.  Set Field Name as Bill to (Get Title from PDF) and add "Row1" for
    the first row

3.  Set Field Type as Text Box

4.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the text for Row 1 in the Name column.

### Extract Text

#### Objective
To extract all the text from a PDF.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input Description to describe the task.
  Description    
  (input)        

  PDF Path       The input path of the PDF file.
  (input)        

  Start Page No  The input of the first page of the PDF file.
  (input)        

  End Page No    The input of the last page of the PDF file.
  (input)        

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to extract the text from this PDF.

You need to create a new Global Variable.

#### Steps

1.  Set PDF Path.

2.  Set Start Page.

3.  Set End Page.

4.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the text from the entire PDF.



### Get PDF Info

#### Objective
To retrieve the information regarding a PDF such as:

1.  Author

2.  Created Date

3.  Created Timestamp

4.  Modified Date

5.  Modified Timestamp

6.  Page Count

7.  PDF Creator

8.  PDF Producer

9.  PDF Version

10. Subject

11. Title

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| PDF Path    | The input path of the PDF file.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Field to    | This dropdown list allows the user to extract data     |
| Get         | regarding:                                             |
| (Dropdown   |                                                        |
| List)       | a)  Author                                             |
|             |                                                        |
|             | b)  Created Date                                       |
|             |                                                        |
|             | c)  Created Timestamp                                  |
|             |                                                        |
|             | d)  Modified Date                                      |
|             |                                                        |
|             | e)  Modified Timestamp                                 |
|             |                                                        |
|             | f)  Page Count                                         |
|             |                                                        |
|             | g)  PDF Creator                                        |
|             |                                                        |
|             | h)  PDF Producer                                       |
|             |                                                        |
|             | i)  PDF Version                                        |
|             |                                                        |
|             | j)  Subject                                            |
|             |                                                        |
|             | k)  Title                                              |
+-------------+--------------------------------------------------------+
| Gvariable   | The OrangeBot will save the Result in a Gvariable      |
| to Save     | created by the user. All Gvariables created/auto       |
| (Dropdown   | generated will be in the list. For example, if the     |
| List)       | user uses a Gvariable called "@Text@" and the Result   |
|             | is "1", it will save the result in the Gvariable, so   |
|             | as a result, "1" will be saved as the value of     |
|             | "\@Text@".                                         |
+-------------+--------------------------------------------------------+


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the info regarding this PDF.

You need to create a new Global Variable.

#### Steps

1.  Set PDF Path.

2.  Set Field to Get (up to the user.

3.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the number of Pages in the PDF is 1.

 

### Encrypt PDF

#### Objective
To encrypt the PDF with a password.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  PDF Path       The input path of the PDF file.
  (input)        

  Output Path    The input path of the file after it is encrypted. This
  (input)        can be the same path as the PDF Path.

  Application    This is optional. The Application Name refers to the
  Name (input)   chosen input Name used when configuring Authentication
                 Configuration. The OrangeBot will extract the password
                 from Authentication Configuration with this Application
                 Name. Leave blank if not needed.

  User ID/Name   This is optional. The User ID refers to the input
  (input)        chosen user ID used when configuring Authentication
                 Configuration. The username for the application/website
                 is what the user would usually choose. The OrangeBot
                 will extract the password from Authentication
                 Configuration with this User ID/Name. For example, if it
                 is a website, it will use the website username as the
                 User ID.

  Plain Password An input password chosen by the user to encrypt the PDF.
  (input)        
  -------------- --------------------------------------------------------

Before: We need to encrypt this PDF with a password.

#### Steps

1.  Set PDF Path.

2.  Set Output Path with a different name (The Bot will create a new
    PDF(.

3.  Set Plain Password as a password of your choosing.

All fields not seen here do not need to be filled.

After: The Bot has encrypted this PDF with a password.

 

### Register PDF Password

#### Objective
To decrypt the PDF with a password.

#### Table Field
  ---------------- --------------------------------------------------------
  Field            Description

  Task Name        Name of the task belong to the group

  Task Description Input text that represents the Description to describe
  (input)          the task. This is optional.

  PDF Path (input) The input path of the PDF file.

  PDF Password     An input password used to unlock the PDF.
  (input)          

  Authentication   This is optional. The Authentication App refers to
  App (input)      the chosen input Name used when configuring
                   Authentication Configuration. The OrangeBot will extract
                   the password from Authentication Configuration with this
                   Application Name. Leave blank if not needed.

  User ID/Name     This is optional. The User ID refers to the input
  (input)          chosen user ID used when configuring Authentication
                   Configuration. The username for the application/website
                   is what the user would usually choose. The OrangeBot
                   will extract the password from Authentication
                   Configuration with this User ID/Name. For example, if it
                   is a website, it will use the website username as the
                   User ID.
  ---------------- --------------------------------------------------------

Before: We need to decrypt this PDF.

#### Steps

1.  Set PDF Path.

2.  Set PDF Password as a password of your choosing.

All fields not seen here do not need to be filled.

After: The Bot has decrypted the PDF.

## Variable Command

### Set Variable Value

#### Objective
To save a value in a Global Variable.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Key to Set     The OrangeBot will save the Value to Set in a
  (Dropdown      Gvariable created by the user. All Gvariables
  List)          created/auto generated will be in the list. For example,
                 if the user uses a Gvariable called "@Text@" and the
                 Result is "1", it will save the result in the Gvariable,
                 so as a result, "1" will be saved as the value of
                 "\@Text@".

  Value to Set   The input text to be saved in a Gvariable.
  (input)        
  -------------- --------------------------------------------------------

\
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

You need to create a new Global Variable.


1.  Set Key to Set

2.  Set Value to Set as "123".

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot detects sets the value of \@Text@ as 123.

 

### Replace Variable

#### Objective
To replace the value in a Global Variable with another value.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Source Value   The input text to be saved in a Gvariable.
  (input)        

  Word To        The input keyword that will be replaced with another
  Replace        text
  (input)        

  Replacement    The input text that will replace the Source Value text.
  (input)        

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

You need to create a new Global Variable.


1.  Set Source Value.

2.  Set Word to Replace as "12".

3.  Set Replacement as "abc".

4.  Set GVariable to Save.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot replaces "12" with "abc" in the value of \@Text@.

 

### Filter Variable

#### Objective
To filter text or characters from a Global Variable.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Variable To    All Gvariables created/auto generated will be in the
  Filter         list. The OrangeBot will extract the text value in the
  (Dropdown      chosen Gvariable and then filter that text value.
  List)          

  Filtering      The input filter text or character that will be removed
  (input)        from the text data in the Variable To Filter.

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".
  -------------- --------------------------------------------------------


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to filter "bc" from \@Text@.

You need to create a new Global Variable.


Set Variable Value

1.  Set Key to Set

2.  Set Value to Set as "123".

All fields not seen here do not need to be filled.

Filter Variable
1.  Set Variable to Filter

2.  Set Filtering as "bc"

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot detects removes "bc" from the value of \@Text@.

 

### Split Variable

#### Objective
To split text data in a Global Variable.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belong to the group.             |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Value to Split   | The input text that needs to be split.            |
| (input)          |                                                   |
+------------------+---------------------------------------------------+
| Split Mode       | This dropdown list that allows the user to split: |
| (Dropdown List)  |                                                   |
|                  | a)  By Delimiter: Split by chosen keyword or      |
|                  |     character (e.g. "-", ":", "and", etc.)        |
|                  |                                                   |
|                  | b)  By Length: Split By number of characters      |
|                  |     (e.g. Split text after every 11 characters)   |
+------------------+---------------------------------------------------+
| Delimiter/Length | The input text to represent the delimiter/length. |
| (input)          |                                                   |
|                  | For Delimiter, input the chosen keyword or    |
|                  | character in the Value to Split (e.g. "-", ":",   |
|                  | "and", etc.).                                     |
|                  |                                                   |
|                  | For Length, input the number of characters    |
|                  | for the OrangeBot to split the text in the Value  |
|                  | to Split.                                         |
+------------------+---------------------------------------------------+
| Gvariable to     | The OrangeBot will save the Result in a Gvariable |
| Save (Dropdown   | created by the user. All Gvariables created/auto  |
| List)            | generated will be in the list. For example, if    |
|                  | the user uses a Gvariable called "@Text@" and the |
|                  | Result is "1", it will save the result in the     |
|                  | Gvariable, so as a result, "1" will be saved  |
|                  | as the value of "\@Text@".                    |
+------------------+---------------------------------------------------+

### By Delimiter

#### Objective
To split a text value by a Delimiter.


#### Steps 
1.  Set Value to Split.

2.  Set Split Mode as By Delimiter.

3.  Set Delimiter as ":"

4.  Set GVariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot detects splits \@Text@ into two different values by ":".



### By Length

#### Objective
To split a Global Variable by Length (number of characters).

#### Steps
1.  Set Value to Split

2.  Set Split Mode as By Lenght

3.  Set Length as "11"

4.  Set GVariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot detects splits \@Text@ into two values by Length (11
Characters).

 

### Convert Date

#### Objective
To convert a Date format to another Date format.

#### Table Field
  ------------------ ----------------------------------------------------
  Field              Description

  Task Name          Name of the task belong to the group.

  Task Description   Input text that represents the Description to
  (input)            describe the task. This is optional.

  Value to Convert   The input date that needs to be converted into
  (input)            another format.

  Input Format       The input text to represent the date format of the
  (input)            Value to Convert. (Refer to Date Format List below)

  Output Format      The input text to represent the date format of the
  (input)            output result. (Refer to Date Format List below)

  Gvariable to Save  The OrangeBot will save the Result in a Gvariable
  (Dropdown List)    created by the user. All Gvariables created/auto
                     generated will be in the list. For example, if the
                     user uses a Gvariable called "@Text@" and the Result
                     is "1", it will save the result in the Gvariable, so
                     as a result, "1" will be saved as the value of
                     "\@Text@".
  ------------------ ----------------------------------------------------

#### Date Format List

We will use the 22nd of August 2025 as an example.

The date formats in the OrangeBot include:

a)  yyyyMMdd = 20250822

b)  yyyy-MM-dd = 2025-22-08

c)  yyyy/MM/dd = 2025/22/08

d)  ddMMyyyy = 22082025

e)  dd/MM/yyyy = 22/08/2025

f)  dd-MM-yyyy = 22-08-2025

g)  MMddyyyy = 08222025

h)  MM/dd/yyyy = 08/22/2025

i)  MM-dd-yyyy = 08-22-2025

j)  dd = 22

k)  MM = 08

l)  MMM = Aug

m)  MMMM = August

n)  yyyy = 2025

o)  yy = 25



Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps

1.  Set Value to Convert.

2.  Set Input Format.

3.  Set Output Format.

4.  Set GVariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot to convert 2022/03/23 (yyyy/MM/dd) to 23/3/2022
(dd/MM/yyyy).

 

### Get Global Data Config

#### Objective
To get a Global Data Config value.

Global Data Config is similar to Global Variable except it applies
to all Scripts, not just one.

#### Table Field
  ------------------ --------------------------------------------------------------------------------------------------------------------------------
  Field              Description

  Task Name          Name of the task belong to the group.

  Task Description   Input text that represents the Description to describe the task. This is optional.
  (input)            

  Application Name   The input text to represent the Application Name saved in Application Profile. The Application Name refers to the name of the
  (input)            Bot Group created in Application Profile. (Refer
                     [[here]{.underline}](https://help.orangefinasia.com/docs/8-orangeworkforce-control-centre/maintenance/application-profile/))

  Global Data Name   The input text to represent name of the Global Dat created in Global Data Configure (Refer
  (input)            [[here]{.underline}](https://help.orangefinasia.com/docs/8-orangeworkforce-control-centre/maintenance/global-data-configure/))

  Gvariable to Save  The OrangeBot will save the Result in a Gvariable created by the user. All Gvariables created/auto generated will be in the
  (Dropdown List)    list. For example, if the user uses a Gvariable called "@Text@" and the Result is "1", it will save the result in the Gvariable,
                     so as a result, "1" will be saved as the value of "\@Text@".
  ------------------ --------------------------------------------------------------------------------------------------------------------------------


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps

Click Maintenance, and then click Global Data Configure.

Click New.

1.  Set Global Data Config Name

2.  Set App Name

3.  Set Content

4.  Click Create Global Data

You need to create a new Global Variable.


1.  Set Application Name.

2.  Set Global Data Name.

3.  Set GVariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot saves the Global Data Config in the \@Text@ value.

 

### Get Text Length

#### Objective
To retrieve the length of a text data.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belong to the group.             |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Text Value       | The input text to represent the text that needs   |
| (input)          | to be measured.                                   |
+------------------+---------------------------------------------------+
| Get Mode         | This is a dropdown list that allows the user to   |
| (Dropdown List)  | measure the Text Value by:                        |
|                  |                                                   |
|                  | a)  Character Count (Include Spaces) - Measure    |
|                  |     the number of characters, including spaces.   |
|                  |                                                   |
|                  | b)  Character Count (Exclude Spaces) - Measure    |
|                  |     the number of characters, not including   |
|                  |     spaces.                                       |
|                  |                                                   |
|                  | c)  Word Count - Measure the number of words.     |
+------------------+---------------------------------------------------+
| Gvariable to     | The OrangeBot will save the Result in a Gvariable |
| Save (Dropdown   | created by the user. All Gvariables created/auto  |
| List)            | generated will be in the list. For example, if    |
|                  | the user uses a Gvariable called "@Text@" and the |
|                  | Result is "1", it will save the result in the     |
|                  | Gvariable, so as a result, "1" will be saved  |
|                  | as the value of "\@Text@".                    |
+------------------+---------------------------------------------------+


### Character Count (Including Space)

#### Objective
To get the Character Count of "Invoice No" (Including
spaces)

#### Steps 

1.  Set Text Value.

2.  Set Get Mode to Character Count (Include Space).

3.  Set GVariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot shows that the Character Count (Including Space) is 10.

 

### Character Count (Excluding Space)

#### Objective
To get the Character Count of "Invoice No" (Excluding
spaces)

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps

1.  Set Text Value.

2.  Set Get Mode to Character Count (Exclude Space).

3.  Set GVariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot shows that the Character Count (Excluding Space) is 9.

 

### Word Count

#### Objective
To get the Word Count of "Invoice No".
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps

1.  Set Text Value.

2.  Set Get Mode to Word Count.

3.  Set GVariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot shows that the Word Count is 2.

 

### Compare Date

#### Objective
To compare a date with another date

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belong to the group.             |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Date 1 (input)   | The input that represents the first date that     |
|                  | needs to be compared.                             |
+------------------+---------------------------------------------------+
| Format 1 (input) | The input text to represent the date format of    |
|                  | Date 1. (Refer to Date Format List below)         |
+------------------+---------------------------------------------------+
| Condition        | This dropdown list allows the user to compare the |
| (Dropdown List)  | date by:                                          |
|                  |                                                   |
|                  | a)  After (\>) - Does Date 1 come after Date 2?   |
|                  |                                                   |
|                  | b)  Equal (=) - Does Date 1 equal Date 2?         |
|                  |                                                   |
|                  | c)  Before (\>) - Does Date 1 come before Date 2? |
|                  |                                                   |
|                  | d)  Later and/or Equal (\>=) - Does Date 1 come   |
|                  |     after/equal to Date 2?                        |
|                  |                                                   |
|                  | e)  Before and/or Equal (\>=) - Does Date 1 come  |
|                  |     before/equal to Date 2?                       |
+------------------+---------------------------------------------------+
| Date 2 (input)   | The input that represents the second date that    |
|                  | needs to be compared.                             |
+------------------+---------------------------------------------------+
|                  |                                                   |
+------------------+---------------------------------------------------+
| Format 2 (input) | The input text to represent the date format of    |
|                  | Date 2. (Refer to Date Format List below)         |
+------------------+---------------------------------------------------+
| Gvariable to     | The OrangeBot will save the Result in a Gvariable |
| Save (Dropdown   | created by the user. All Gvariables created/auto  |
| List)            | generated will be in the list. For example, if    |
|                  | the user uses a Gvariable called "@Text@" and the |
|                  | Result is "1", it will save the result in the     |
|                  | Gvariable, so as a result, "1" will be saved  |
|                  | as the value of "\@Text@".                    |
+------------------+---------------------------------------------------+

Date Format List

We will use the 22nd of August 2025 as an example.

The date formats in the OrangeBot include:

a)  yyyyMMdd = 20250822

b)  yyyy-MM-dd = 2025-22-08

c)  yyyy/MM/dd = 2025/22/08

d)  ddMMyyyy = 22082025

e)  dd/MM/yyyy = 22/08/2025

f)  dd-MM-yyyy = 22-08-2025

g)  MMddyyyy = 08222025

h)  MM/dd/yyyy = 08/22/2025

i)  MM-dd-yyyy = 08-22-2025

j)  dd = 22

k)  MM = 08

l)  MMM = Aug

m)  MMMM = August

n)  yyyy = 2025

o)  yy = 25

### Date After (\>)

#### Objective
To check if a date is after another date.
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps

1.  Set Date 1.

2.  Set Format 1 as dd/MM/yyyy .

3.  Set Condition as \> .

4.  Set Date 2.

5.  Set Format 1 as dd/MM/yyyy .

6.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot shows that the result is Yes (Y), 27/03/2023 is later
than 26/03/2023.

 

### Date Equal (=)

#### Objective
To check if a date is equal to another date.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps

1.  Set Date 1.

2.  Set Format 1 as dd/MM/yyyy .

3.  Set Condition as = .

4.  Set Date 2.

5.  Set Format 1 as dd/MM/yyyy .

6.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot shows that the result is No (N), 27/03/2023 is not equal
to 26/03/2023.

 

### Date Before (\<)

#### Objective
To check if a date is before another date.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps
1.  Set Date 1.

2.  Set Format 1 as dd/MM/yyyy .

3.  Set Condition as \< .

4.  Set Date 2.

5.  Set Format 1 as dd/MM/yyyy .

6.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot shows that the result is No (N), 27/03/2023 is not before
26/03/2023.

 

### Date Later and/or Equal (\>=)

#### Objective
To check if a date is later and/or equal to another date.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps
1.  Set Date 1.

2.  Set Format 1 as dd/MM/yyyy .

3.  Set Condition as \>= .

4.  Set Date 2.

5.  Set Format 1 as dd/MM/yyyy .

6.  Set Gvariable to Save as \@YesOrNo@

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot shows that the result is Yes (Y), 27/03/2023 is later
and/or equal to 26/03/2023.

 

### Date Before and/or Equal (\<=)

#### Objective
To check if a date is before and/or equal to another date.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps
1.  Set Date 1.

2.  Set Format 1 as dd/MM/yyyy .

3.  Set Condition as \<= .

4.  Set Date 2.

5.  Set Format 1 as dd/MM/yyyy .

6.  Set Gvariable to Save as \@YesOrNo@.

All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot shows that the result is No (N), 27/03/2023 is not before
and/or equal to 26/03/2023.

### Get Clipboard Data

#### Objective
To save data from Clipboard Data into a Global Variable.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belong to the group.             |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Data Type        | This dropdown list allows the user to extract:    |
| (Dropdown List)  |                                                   |
|                  | a)  Text                                          |
|                  |                                                   |
|                  | b)  Table                                         |
+------------------+---------------------------------------------------+
| Gvariable to     | The OrangeBot will save the Result in a Gvariable |
| Save (Dropdown   | created by the user. All Gvariables created/auto  |
| List)            | generated will be in the list. For example, if    |
|                  | the user uses a Gvariable called "@Text@" and the |
|                  | Result is "1", it will save the result in the     |
|                  | Gvariable, so as a result, "1" will be saved  |
|                  | as the value of "\@Text@".                    |
+------------------+---------------------------------------------------+

### Text

#### Objective
To save text from Clipboard Data into a Global Variable. The
Clipboard works as a temporary storage area because it stores the
data temporarily so that it can be copied and pasted within multiple
applications or documents easily.

#### Steps
Make sure Clipboard Settings are enabled.


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

You need to create a new Global Variable.

Press CTRL + C on your keyboard to copy the following text,

Testing
Before: After copying, this text is in the Clipboard Data (Press
WINDOWS + V on your keyboard to see). We need to save this text in a
Global Variable.


1.  Set Data Type as Text.

2.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot has saved the Text from Clipboard Data into a Global
Variable.

 

### Table

#### Objective
To save text from a Table in Clipboard Data into a Global
Variable.

Make sure Clipboard Settings are enabled.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

You need to create a new Global Variable.

Press CTRL + C on your keyboard to copy the following table,

#### Table Field
  ---------------- -------------- --------------- --------------------- ----------------
State        Total        New           UnSubscriptions   Population                   Downloads    Subscribers
WP Kuala       11818      533         85                4047  Lumpur
Selangor     3968       88          24                6715.6
N Sembilan   2949       10          20                1910.7
Johor        2045       1           6                 2267.5
Sarawak      1312       22          8                 1162.6
Pahang       866        15          23                3926.5
Sabah        851        97          3                 1806.5
Perak        796        16          19                2907.5
Melaka       465        6           6                 2611.6
Kelantan     392        0           7                 1750.1
P Pinang     308        0           5                 960.5
Terengganu   264        26          1                 103.1
WP Putrajaya 179        1           3                 1959.7
Kedah        173        7           1                 1294.1
Perlis       140        1           1                 94.6
WP Labuan    38         0           2                 264.7  ---------------- -------------- --------------- --------------------- ----------------

Before: After copying, this table is in the Clipboard Data (Press
WINDOWS + V on your keyboard to see).We need to save this table in a
Global Variable.

#### Steps

1.  Set Data Type as Table.

2.  Set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results..

After: The Bot has saved the Table from Clipboard Data into a Global
Variable.

 

### Run Gvariable Mapping

#### Objective
To save data from Gvariable Mapping. Gvariable Mapping is
similar to Global Variable, it allows the user to save data elsewhere
for the OrangeBot to extract later.

#### Table Field
  ------------------ ----------------------------------------------------
  Field              Description

  Task Name          Name of the task belong to the group.

  Task Description   Input text that represents the Description to
  (input)            describe the task. This is optional.

  Mapping Name       Input text that represents the Name of the Mapping
  (input)            Name saved in Gvariable Mapping.
  ------------------ ----------------------------------------------------

#### Steps
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

You need to create a new Global Variable.

Open Gvariable Mapping.

Click New.

1.  Set Mapping Name.

2.  Set Mapping Description.

3.  Click Create Mapping.

Click the Mapping Name.

1.  Click Add New Field.

2.  Set Gvariable as Text.

3.  Set Type as Fixed Value

4.  Set Param 1 as 123.


1.  Set Mapping Name.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: The Bot has saved the data from the Gvariable Mapping.

## Web Command

### Open Browser

#### Objective
To open a Web Browser.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belong to the group.             |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Browser Type     | This dropdown list allows the user to open a      |
| (Dropdown List)  | browser in:                                       |
|                  |                                                   |
|                  | a)  Internet Explorer                             |
|                  |                                                   |
|                  | b)  Google Chrome                                 |
|                  |                                                   |
|                  | c)  Microsoft Edge                                |
+------------------+---------------------------------------------------+
| Open with User   | Recommended Default is No.                    |
| Data (Dropdown   |                                                   |
| List)            | This dropdown list allows the user to open a      |
|                  | browser with:                                     |
|                  |                                                   |
|                  | a)  Yes - With user data. This will open the      |
|                  |     browser with the default account set by the   |
|                  |     user when opening a web browser normally.     |
|                  |                                                   |
|                  | b)  No - Without user data. The OrangeBot will    |
|                  |     open a new browser as a guest.                |
+------------------+---------------------------------------------------+

### Internet Explorer

#### Objective
To open an Internet Explorer Browser.

#### Steps

1.  Set Browser Type as Internet Explorer.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

After: The Bot opens Internet Explorer.

 

### Google Chrome

#### Objective
To open a Google Chrome Browser.

#### Steps
1.  Set Browser Type as Google Chrome.

All fields not seen here do not need to be filled.

After: The Bot opens Google Chrome.

 

### Microsoft Edge

#### Objective
To open a Microsoft Edge Browser.

#### Steps

1.  Set Browser Type as Microsoft Edge.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

After: The Bot opens Microsoft Edge.

 

### Navigation

#### Objective
To navigate a web browser to a chosen webpage.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belong to the group.             |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Navigation Mode  | This dropdown list allows the user to:            |
| (Dropdown List)  |                                                   |
|                  | a)  Navigate URL - Navigate to a website URL      |
|                  |                                                   |
|                  | b)  Navigate Back - Navigate to the previous      |
|                  |     page.                                         |
|                  |                                                   |
|                  | c)  Navigate Forward - Navigate to the forward    |
|                  |     page. (Only used if the previous task is  |
|                  |     Navigate Back)                                |
|                  |                                                   |
|                  | d)  Refresh Page - Refreshes the web page.        |
+------------------+---------------------------------------------------+
| URL Address      | Input text that represents URL website that the   |
| (input)          | OrangeBot will navigate to. This is only used for |
|                  | Navigate URL.                                 |
+------------------+---------------------------------------------------+

### Navigate URL

#### Objective
For the Bot to go to
[[https://www.saucedemo.com/]{.underline}](https://www.saucedemo.com/).\


#### Steps

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

After: The Bot goes to https://www.saucedemo.com/.

 

### Navigate Back

#### Objective
For the Bot to go back on page in a Web Browser\
First, create this script:

Before: The previous page is a Google Search page.

#### Steps

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate Back.

All fields not seen here do not need to be filled.

After: The Bot goes back to the Google Search Page.

 

### Navigate Forward

#### Objective
For the Bot to navigate forward to the next page.\
First, create this script:

Before: The next page is the Swag Labs page.

#### Steps

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate Forward.

All fields not seen here do not need to be filled.

After: The Bot goes forward to the Swag Labs Page.

 

### Refresh Page

#### Objective
For the Bot to refresh the web page.\
First, create this script:

Before: The page did not load properly.

#### Steps

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Refresh Page.

All fields not seen here do not need to be filled.

After: The Bot refreshes and loads the Swag Lab page properly.
 

### Click Element

#### Objective
To click a button on a website.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belong to the group.             |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Element Key      | The Element Key is the HTML data used to identify |
| (Dropdown List)  | the element. This dropdown list allows the user   |
|                  | to identify the element by:                       |
|                  |                                                   |
|                  | a)  ID                                            |
|                  |                                                   |
|                  | b)  Class Name                                    |
|                  |                                                   |
|                  | c)  Name                                          |
|                  |                                                   |
|                  | d)  CSS Selector                                  |
|                  |                                                   |
|                  | e)  Link Text                                     |
|                  |                                                   |
|                  | f)  Partial Link Text                             |
|                  |                                                   |
|                  | g)  Tag Name                                      |
|                  |                                                   |
|                  | h)  XPath (Recommended Default)               |
|                  |                                                   |
|                  | i)  JavaScript                                    |
+------------------+---------------------------------------------------+
| Key Value        | Input text that represents HTML data extracted    |
| (input)          | from the website used to locate the element.      |
+------------------+---------------------------------------------------+
| Click Mode       | This dropdown list allows the user to do a:       |
| (Dropdown List)  |                                                   |
|                  | a)  Normal Click                                  |
|                  |                                                   |
|                  | b)  Normal Double Click                           |
|                  |                                                   |
|                  | c)  Right Click                                   |
|                  |                                                   |
|                  | d)  JS Click                                      |
|                  |                                                   |
|                  | e)  JS Submit                                     |
|                  |                                                   |
|                  | f)  Popup Click                                   |
|                  |                                                   |
|                  | g)  Mouse Click                                   |
+------------------+---------------------------------------------------+

First, create this script:

Before: Can the Bot click the "Login" button on screen? (go to [[Swag
Labs]{.underline}](https://www.saucedemo.com/))

Right click the login button, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.


Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Click Element
1.  Set Element Key as XPath

2.  Set Key Value

3.  Set Click Mode (up to user)

All fields not seen here do not need to be filled.

After: The OrangeBot clicks the Login button.


### Check Element Existence

#### Objective
To check the existence of an element in a webpage when the
OrangeBot goes to a website.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belong to the group.             |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Element Key      | The Element Key is the HTML data used to identify |
| (Dropdown List)  | the element. This dropdown list allows the user   |
|                  | to identify the element by:                       |
|                  |                                                   |
|                  | j)  ID                                            |
|                  |                                                   |
|                  | k)  Class Name                                    |
|                  |                                                   |
|                  | l)  Name                                          |
|                  |                                                   |
|                  | m)  CSS Selector                                  |
|                  |                                                   |
|                  | n)  Link Text                                     |
|                  |                                                   |
|                  | o)  Partial Link Text                             |
|                  |                                                   |
|                  | p)  Tag Name                                      |
|                  |                                                   |
|                  | q)  XPath (Recommended Default)               |
|                  |                                                   |
|                  | r)  JavaScript                                    |
+------------------+---------------------------------------------------+
| Element Value    | Input text that represents HTML data extracted    |
| (input)          | from the website used to locate the element.      |
+------------------+---------------------------------------------------+
| Checking Mode    | This dropdown list allows the user to check if    |
| (Dropdown List)  | the:                                              |
|                  |                                                   |
|                  | a)  Element Exists - If the element exists.       |
|                  |                                                   |
|                  | b)  Element Clickable - If the element is         |
|                  |     clickable.                                    |
|                  |                                                   |
|                  | c)  Element Visible - If the element is visible.  |
+------------------+---------------------------------------------------+
| Checking         | Input text that represents the total number of    |
| Duration (sec)   | seconds for the OrangeBot to check. If it is set  |
| (input)          | as "5" it will search for the element for 5       |
|                  | seconds in total.                                 |
+------------------+---------------------------------------------------+

### Element Exists

#### Objective
To check the existence of an element in a webpage when the
OrangeBot goes to a website.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: Can the Bot detect the "Login" button on screen? (go to [[Swag
Labs]{.underline}](https://www.saucedemo.com/))

Right click the login button, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.


Open Browser
3.  Set Browser Type as Google Chrome.

4.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
3.  Set Navigation Mode as Navigate URL

4.  Set URL Address for the website

All fields not seen here do not need to be filled.

Check Element Existence
4.  Set Element Key as XPath

5.  Set Element Value

6.  Set Mode as Element Exists

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot can detect the element "Login"
button on screen.



### Element Clickable

#### Objective
To check whether an element is clickable in a webpage when
the OrangeBot goes to a website.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: Can the Bot click the "Login" button on screen? (go to [[Swag
Labs]{.underline}](https://www.saucedemo.com/))

Right click the login button, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.


Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Check Element Existence
1.  Set Element Key as XPath

2.  Set Element Value

3.  Set Mode as Element Clickable

All fields not seen here do not need to be filled.

You can get the Element Value by right clicking the Login button,
clicking Inspect, and then right-clicking the automatically highlighted
HTML information.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot can that the element "Login"
button is clickable on screen.



### Element Visible

#### Objective
To check the whether an element is visible in a webpage when
the OrangeBot goes to a website.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: Is the "Login" button visible on screen? (go to [[Swag
Labs]{.underline}](https://www.saucedemo.com/))

Right click the login button, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

#### Steps


Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Check Element Existence\

1.  Set Element Key as XPath

2.  Set Element Value

3.  Set Mode as Element Visible

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot can see that the element "Login"
button is visible on screen.



### Wait Page Loaded

#### Objective
To wait for a page to fully load.

#### Table Field
  ------------------ ----------------------------------------------------
  Field              Description

  Task Name          Name of the task belong to the group.

  Task Description   Input text that represents the Description to
  (input)            describe the task. This is optional.

  Timeout Duration   Input text that represents the total number of
  (Seconds) (input)  seconds the OrangeBot will wait for the page to
                     load. Default is 180 seconds, or 3 minutes in total.
  ------------------ ----------------------------------------------------

First, create this script:

#### Steps

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Wait Page Loaded
1.  Set Timeout Duration as 180.

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot will wait for the webpage to
load.

### Wait Element Loaded

#### Objective
To check the existence of an element in a webpage when the
OrangeBot goes to a website.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belong to the group.             |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Element Key      | The Element Key is the HTML data used to identify |
| (Dropdown List)  | the element. This dropdown list allows the user   |
|                  | to identify the element by:                       |
|                  |                                                   |
|                  | 1.  Automation ID                                 |
|                  |                                                   |
|                  | 2.  Class Name                                    |
|                  |                                                   |
|                  | 3.  Name                                          |
|                  |                                                   |
|                  | 4.  XPath (Recommended Default)               |
+------------------+---------------------------------------------------+
| Key Value        | Input text that represents HTML data extracted    |
| (input)          | from the website used to locate the element.      |
+------------------+---------------------------------------------------+
| Timeout (sec)    | Input text that represents the total number of    |
| (input)          | seconds the OrangeBot will wait for the page to   |
|                  | load. Default is 180 seconds, or 3 minutes in     |
|                  | total.                                            |
+------------------+---------------------------------------------------+
| Mode (Dropdown   | This dropdown list allows the user to have the    |
| List)            | OrangeBot wait until the:                         |
|                  |                                                   |
|                  | a)  Element Exists - The element exists.          |
|                  |                                                   |
|                  | b)  Element Clickable - The element is clickable. |
|                  |                                                   |
|                  | c)  Element Visible - The element is visible.     |
+------------------+---------------------------------------------------+

### Element Exists

#### Objective
To check the existence of an element in a webpage when the
OrangeBot goes to a website.\
First, create this script:

Before: Can the Bot wait for the "Login" button to appear on screen? (go
to [[Swag Labs]{.underline}](https://www.saucedemo.com/))

Right click the login button, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

#### Steps

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Wait Element Existence
1.  Set Element Key as XPath

2.  Set Element Value

3.  Set Timeout Duration (default is 180 seconds)

4.  Set Mode as Element Exists

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot will wait for the "Login" button
on screen.



### Element Clickable

#### Objective
To wait until an element is clickable in a webpage when the
OrangeBot goes to a website.\
First, create this script:

Before: Can the Bot wait for the "Login" button to appear on screen? (go
to [[Swag Labs]{.underline}](https://www.saucedemo.com/))

Right click the login button, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

#### Steps

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Wait Element Existence
1.  Set Element Key as XPath

2.  Set Element Value

3.  Set Timeout Duration (default is 180 seconds)

4.  Set Mode as Element Clickable

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot waits until the element "Login"
button is clickable on screen.



### Element Visible

#### Objective
To wait until an element is visible in a webpage when the
OrangeBot goes to a website.\
First, create this script:

Before: Can the Bot wait for the "Login" button to appear on screen? (go
to [[Swag Labs]{.underline}](https://www.saucedemo.com/))

Right click the login button, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

#### Steps

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Wait Element Existence
1.  Set Element Key as XPath

2.  Set Element Value

3.  Set Timeout Duration (default is 180 seconds)

4.  Set Mode as Element Visible

All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot waits until the element "Login"
button is visible on screen.





### Configure Browser

#### Objective
For the Bot to set the default Download folder for where all
downloaded files will be saved.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Browser Type     | This dropdown list allows the user to configure a |
| (Dropdown List)  | web browsers, including:                          |
|                  |                                                   |
|                  | a)  Internet Explorer                             |
|                  |                                                   |
|                  | b)  Google Chrome                                 |
|                  |                                                   |
|                  | c)  Microsoft Edge                                |
+------------------+---------------------------------------------------+
| Prompt for       | Recommended Default input Is No.              |
| Download?        |                                                   |
| (input)          | If inputted as Yes, the OrangeBot will have   |
|                  | an alert asking the user to approve the download  |
|                  | before downloading.                               |
+------------------+---------------------------------------------------+
| Default Download | The input path of the folder for the OrangeBot to |
| Folder (input)   | save all downloads.                               |
+------------------+---------------------------------------------------+
| Disable          | Recommended Default input Is Yes.             |
| Extensions?      |                                                   |
| (input)          | If inputted as No, the OrangeBot will not     |
|                  | disable extensions.                               |
+------------------+---------------------------------------------------+
| Disable Pop-up   | If inputted as Yes, the OrangeBot will        |
| Blocking?        | disable pop-up blocking.                          |
| (input)          |                                                   |
|                  | If inputted as No, the OrangeBot will not     |
|                  | disable pop-up blocking.                          |
+------------------+---------------------------------------------------+
| Ignore           | Recommended Default input Is Yes.             |
| Certificate      |                                                   |
| Error? (input)   | If inputted as No, the OrangeBot will not     |
|                  | ignore certificate errors and might not be able   |
|                  | to download the file.                             |
+------------------+---------------------------------------------------+
| No Sand-box?     | If inputted as Yes, the OrangeBot will        |
| (input)          | disable the sandbox security feature to make it   |
|                  | easier to download files.                         |
|                  |                                                   |
|                  | If inputted as No, the OrangeBot will not     |
|                  | disable the sandbox security feature.             |
+------------------+---------------------------------------------------+
| Remove           | If inputted as Yes, the OrangeBot will remove |
| Automation Flag? | Automation Flags.                                 |
| (input)          |                                                   |
|                  | If inputted as No, the OrangeBot will not     |
|                  | remove Automation Flags.                          |
+------------------+---------------------------------------------------+
| Use Random User  | If inputted as Yes, the OrangeBot will be     |
| Agent? (input)   | allowed to use random user agents.                |
|                  |                                                   |
|                  | If inputted as No, the OrangeBot will not be  |
|                  | allowed to use random user agents.                |
+------------------+---------------------------------------------------+
| Enable Native    | If inputted as Yes, the OrangeBot will enable |
| Events?          | Native Agents.                                    |
|                  |                                                   |
|                  | If inputted as No, the OrangeBot will not     |
|                  | enable Native Agents.                             |
+------------------+---------------------------------------------------+

Before: The "New folder" folder is empty.

#### Steps

1.  Set Browser Type (up to user)

2.  Set Prompt for Download as No

3.  Set Download Default Folder as the file path for the "New Folder"
    folder.

All fields not seen here do not need to be filled.

After: All downloads go to the "New folder" folder.



### Get Element Info

#### Objective
To extract the info of an element in a web page.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Element Key      | The Element Key is the HTML data used to identify |
| (Dropdown List)  | the element. This dropdown list allows the user   |
|                  | to identify the element by:                       |
|                  |                                                   |
|                  | a)  ID                                            |
|                  |                                                   |
|                  | b)  Class Name                                    |
|                  |                                                   |
|                  | c)  Name                                          |
|                  |                                                   |
|                  | d)  CSS Selector                                  |
|                  |                                                   |
|                  | e)  Link Text                                     |
|                  |                                                   |
|                  | f)  Partial Link Text                             |
|                  |                                                   |
|                  | g)  Tag Name                                      |
|                  |                                                   |
|                  | h)  XPath (Recommended Default)               |
|                  |                                                   |
|                  | i)  JavaScript                                    |
+------------------+---------------------------------------------------+
| Key Value        | Input text that represents HTML data extracted    |
| (input)          | from the website used to locate the element.      |
+------------------+---------------------------------------------------+
| Get Mode         | This dropdown list allows the user to extract:    |
| (Dropdown List)  |                                                   |
|                  | a)  Value - Text Data                             |
|                  |                                                   |
|                  | b)  Attribute - HTML data                         |
+------------------+---------------------------------------------------+
| Gvariable to     | The OrangeBot will save the Result in a Gvariable |
| Save (Dropdown   | created by the user. All Gvariables created/auto  |
| List)            | generated will be in the list. For example, if    |
|                  | the user uses a Gvariable called "@Text@" and the |
|                  | Result is "1", it will save the result in the     |
|                  | Gvariable, so as a result, "1" will be saved  |
|                  | as the value of "\@Text@".                    |
+------------------+---------------------------------------------------+

### Value

#### Objective
To get the value of an element (text) in a web page.\
\
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The Login button has text that needs to be saved (go to [[Swag
Labs]{.underline}](https://www.saucedemo.com/)).

Right click the login button, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

You need to create a new Global Variable.

You can get the Element Value by right clicking the Login button,
clicking Inspect, and then right-clicking the automatically highlighted
HTML information.

#### Steps

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Get Element Info
1.  Set Element Key

2.  Set Key Value

3.  Set Get Mode as Value

4.  Set Gvariable to Save

So the Bot will scan from left to right, in between Bill to and Ship-to.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the text for the Login button.

### Attribute

#### Objective
To get the attribute (type) of an element in a web page.\
\
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We want to know the attribute (type) of the Login element.

Right click the login button, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

You need to create a new Global Variable.

You can get the Element Value by right clicking the Login button,
clicking Inspect, and then right-clicking the automatically highlighted
HTML information.

#### Steps
\
Open Browser
5.  Set Browser Type as Google Chrome.

6.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Get Element Info
1.  Set Element Key

2.  Set Key Value

3.  Set Get Mode as Attribute

4.  Set Attribute to Get as "class" to get the type of element

5.  Set Gvariable to Save

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the Login element is a submit button to be
clicked.


### Get Element Table

#### Objective
To get the body of a table in a web page.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Element Key      | The Element Key is the HTML data used to identify |
| (Dropdown List)  | the element. This dropdown list allows the user   |
|                  | to identify the element by:                       |
|                  |                                                   |
|                  | a)  ID                                            |
|                  |                                                   |
|                  | b)  Class Name                                    |
|                  |                                                   |
|                  | c)  Name                                          |
|                  |                                                   |
|                  | d)  CSS Selector                                  |
|                  |                                                   |
|                  | e)  Link Text                                     |
|                  |                                                   |
|                  | f)  Partial Link Text                             |
|                  |                                                   |
|                  | g)  Tag Name                                      |
|                  |                                                   |
|                  | h)  XPath (Recommended Default)               |
|                  |                                                   |
|                  | i)  JavaScript                                    |
+------------------+---------------------------------------------------+
| Element Value    | Input text that represents HTML data extracted    |
| (input)          | from the website used to locate the element.      |
+------------------+---------------------------------------------------+

\
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: The table body has text that needs to be saved. (Go to [[Sample
Tables - Web - Cal
Poly]{.underline}](https://afd.calpoly.edu/web/sample-tables))

Right click the table, then click Inspect.

Click "\<tbody\>"

Right-click the data highlighted in blue, then click Copy, then
click Copy full Xpath.

#### Steps

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Get Element Table
1.  Set Element Key

2.  Set Element Value (get from HTML)

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows the text for the table.



### Scroll to Element

#### Objective
To scroll to an element in a web page.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Element Key      | The Element Key is the HTML data used to identify |
| (Dropdown List)  | the element. This dropdown list allows the user   |
|                  | to identify the element by:                       |
|                  |                                                   |
|                  | a)  ID                                            |
|                  |                                                   |
|                  | b)  Class Name                                    |
|                  |                                                   |
|                  | c)  Name                                          |
|                  |                                                   |
|                  | d)  CSS Selector                                  |
|                  |                                                   |
|                  | e)  Link Text                                     |
|                  |                                                   |
|                  | f)  Partial Link Text                             |
|                  |                                                   |
|                  | g)  Tag Name                                      |
|                  |                                                   |
|                  | h)  XPath (Recommended Default)               |
|                  |                                                   |
|                  | i)  JavaScript                                    |
+------------------+---------------------------------------------------+
| Key Value        | Input text that represents HTML data extracted    |
| (input)          | from the website used to locate the element.      |
+------------------+---------------------------------------------------+


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

This is the top of the page.

Before: We need to scroll to this table.

Right click the table, then click Inspect.

Click "\<tbody\>"

Right-click the data highlighted in blue, then click Copy, then
click Copy full Xpath.

#### Steps
\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Scroll to Element
1.  Set Element Key

2.  Set Element Value (get from HTML)

All fields not seen here do not need to be filled.

After: The OrangeBot scrolls down to the table.



### Alert

#### Objective
To manage alerts on a web page.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Action Mode      | This dropdown list allows the user to:            |
| (Dropdown List)  |                                                   |
|                  | a)  Check Alert existence                         |
|                  |                                                   |
|                  | b)  Get Alert Text                                |
|                  |                                                   |
|                  | c)  Handle Alert                                  |
+------------------+---------------------------------------------------+
| Checking         | Input text that represents the total number of    |
| Duration (sec)   | seconds for the OrangeBot to check. If it is set  |
| (input)          | as "5" it will search for the element for 5       |
|                  | seconds in total.                                 |
+------------------+---------------------------------------------------+
| Result Save to   | This is only used for Get Alert Text. The     |
| (Dropdown List)  | OrangeBot will save the Result in a Gvariable     |
|                  | created by the user. All Gvariables created/auto  |
|                  | generated will be in the list. For example, if    |
|                  | the user uses a Gvariable called "@Text@" and the |
|                  | Result is "1", it will save the result in the     |
|                  | Gvariable, so as a result, "1" will be saved  |
|                  | as the value of "\@Text@".                    |
+------------------+---------------------------------------------------+
| Handle Model     | This is only used for Handle Alert. This      |
| (Dropdown List)  | dropdown list allows the user to:                 |
|                  |                                                   |
|                  | a)  Accept Alert                                  |
|                  |                                                   |
|                  | b)  Dismiss Alert                                 |
|                  |                                                   |
|                  | c)  Input Alert - Input text in the Alert         |
+------------------+---------------------------------------------------+
| Input Text       | This is only used for Input Alert. The Input  |
| (input)          | Text that represents the text that will be        |
|                  | entered into the Alert.                           |
+------------------+---------------------------------------------------+

### Check Alert Existence

#### Objective
To check if there is an Alert in the web page.


Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to check if this page has an alert.

Right click the highlighted button, then click Inspect. (go to
[[Test Page For JavaScript
Alerts]{.underline}](https://testpages.eviltester.com/styled/alerts/alert-test.html))

Right-click the data highlighted in blue, then click Copy, then
click Copy full Xpath.

You need to create a new Global Variable.

#### Steps
\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Click Element
1.  Set Element Key as XPath

2.  Set Key Value (Get from website)

3.  Set Click Mode (up to user)

All fields not seen here do not need to be filled.

Alert
1.  Set Action Mode as Check Alert Existence.

2.  Set Result Save to.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the Bot confirms that it is true, there is an
Alert in the web page.

 

### Get Alert Text

#### Objective
To get the text from an Alert box in a web page.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get this text.

Right click the highlighted button, then click Inspect. (go to
[[Test Page For JavaScript
Alerts]{.underline}](https://testpages.eviltester.com/styled/alerts/alert-test.html))

Right-click the data highlighted in blue, then click Copy, then
click Copy full Xpath.

You need to create a new Global Variable.

#### Steps

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Click Element
1.  Set Element Key as XPath

2.  Set Key Value (Get from website)

3.  Set Click Mode (up to user)

All fields not seen here do not need to be filled.

Alert
1.  Set Action Mode as Get Alert Text.

2.  Set Result Save to.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the Bot has retrieved the text in the Alert
Box.





### Accept Alert

#### Objective
To accept an Alert on the web page.
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to accept this Alert.

Right click the highlighted button, then click Inspect. (go to
[[Test Page For JavaScript
Alerts]{.underline}](https://testpages.eviltester.com/styled/alerts/alert-test.html))

Right-click the data highlighted in blue, then click Copy, then
click Copy full Xpath.

You need to create a new Global Variable.

#### Steps
\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Click Element
1.  Set Element Key as XPath

2.  Set Key Value (Get from website)

3.  Set Click Mode (up to user)

All fields not seen here do not need to be filled.

Alert
1.  Set Action Mode as Handle Alert.

2.  Set Result Save to.

3.  Set Handle Model as Accept Alert.

All fields not seen here do not need to be filled.

After: Result shows that the Bot has accepted the Alert.



### Dismiss Alert

#### Objective
To dismiss an Alert in the web page.



Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to dismiss this Alert.

Right click the highlighted button, then click Inspect. (go to
[[Test Page For JavaScript
Alerts]{.underline}](https://testpages.eviltester.com/styled/alerts/alert-test.html))

Right-click the data highlighted in blue, then click Copy, then
click Copy full Xpath.

You need to create a new Global Variable.

#### Steps
\
Open Browser
3.  Set Browser Type as Google Chrome.

4.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Click Element
1.  Set Element Key as XPath

2.  Set Key Value (Get from website)

3.  Set Click Mode (up to user)

All fields not seen here do not need to be filled.

Alert
1.  Set Action Mode as Handle Alert.

2.  Set Result Save to.

3.  Set Handle Model as Dismiss Alert.

All fields not seen here do not need to be filled.

After: Result shows that the Bot has dismissed the Alert Box.

 

### Input Alert

#### Objective
To input text in an Alert on the web page.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to input text in this Alert.

Right click the highlighted button, then click Inspect. (go to
[[Test Page For JavaScript
Alerts]{.underline}](https://testpages.eviltester.com/styled/alerts/alert-test.html))

Right-click the data highlighted in blue, then click Copy, then
click Copy full Xpath.

You need to create a new Global Variable.

#### Steps

1.  Set Action Mode as Handle Alert.

2.  Set Result Save to.

3.  Set Handle Model as Input Alert.

All fields not seen here do not need to be filled.

After: Result shows that the Bot has input \"Testing\" in the Alert Box.



### Get Window Info

#### Objective
To extract information regarding a web page.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Get Mode         | This dropdown list allows the user to extract     |
| (Dropdown List)  | info regarding:                                   |
|                  |                                                   |
|                  | a)  Domain                                        |
|                  |                                                   |
|                  | b)  URL                                           |
|                  |                                                   |
|                  | c)  Window Count                                  |
|                  |                                                   |
|                  | d)  Window Handle                                 |
|                  |                                                   |
|                  | e)  Window Title                                  |
|                  |                                                   |
|                  | f)  Zoom Level                                    |
+------------------+---------------------------------------------------+
| Gvariable to     | The OrangeBot will save the Result in a Gvariable |
| Save (Dropdown   | created by the user. All Gvariables created/auto  |
| List)            | generated will be in the list. For example, if    |
|                  | the user uses a Gvariable called "@Text@" and the |
|                  | Result is "1", it will save the result in the     |
|                  | Gvariable, so as a result, "1" will be saved  |
|                  | as the value of "\@Text@".                    |
+------------------+---------------------------------------------------+

### Domain

#### Objective
To get the Domain of a web page.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Domain of this web page..

You need to create a new Global Variable.

#### Steps
\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Get Window Info
1.  Set Get Mode as Domain.

2.  set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the Bot has retrieved the Domain of the web
page.


### URL

#### Objective
To get the URL of a web page.
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps
Before: We need to get the URL of this web page..

You need to create a new Global Variable.

\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Get Window Info
1.  Set Get Mode as URL.

2.  set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the Bot has retrieved the URL of the web page.



### Window Count

#### Objective
To get the number of windows in a Web browser.

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps
Before: We need to get the number of windows in this Web browser.

You need to create a new Global Variable.

\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Get Window Info
1.  Set Get Mode as Window Count.

2.  set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the Bot the number of windows in this Web
browser.



### Window Handle

#### Objective
To get the Window Handle in a Web browser.\
\
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps

Before: We need to get the Window Handle in this Web browser.

You need to create a new Global Variable.


\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Get Window Info
1.  Set Get Mode as Window Handle.

2.  set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the Bot the Window Handle in this Web browser.



### Window Title

#### Objective
To get the Window Title in a Web browser.\
\
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps 

Before: We need to get the Window Title in this Web browser.

You need to create a new Global Variable.


\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Get Window Info
1.  Set Get Mode as Window Title.

2.  set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the Bot the Window Title in this Web browser.


### Zoom Level

#### Objective
To get the Zoom Level in a Web browser.\
\
Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

#### Steps 

Before: We need to get the Zoom Level in this Web browser.

You need to create a new Global Variable.

\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Get Window Info
1.  Set Get Mode as Zoom Level.

2.  set Gvariable to Save.

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the Bot has set the Zoom Level in this Web
browser.



### Open Window

#### Objective
To open a new window in a web browser.

#### Table Field
  ------------------ ----------------------------------------------------
  Field              Description

  Task Name          Name of the task belong to the group.

  Task Description   Input text that represents the Description to
  (input)            describe the task. This is optional.

  Url (input)        Input text that represents the website URL that will
                     be navigated to in the new window.
  ------------------ ----------------------------------------------------

First, create this script:

#### Steps
Before: We need to open a new window in this web browser.


\
Open Browser
1.  Set Browser Type as Microsoft Edge.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Open Window\

1.  Set Url.

All fields not seen here do not need to be filled.

After: Result shows that the Bot has opened a new window in this web
browser.



### Switch Window

#### Objective
To switch to another window in a Web browser.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Switch Mode      | This dropdown list allows the user to switch the  |
| (Dropdown List)  | window by:                                        |
|                  |                                                   |
|                  | a)  First Window                                  |
|                  |                                                   |
|                  | b)  Last Window                                   |
|                  |                                                   |
|                  | c)  Previous Window                               |
|                  |                                                   |
|                  | d)  Window Title                                  |
|                  |                                                   |
|                  | e)  Window No.                                    |
+------------------+---------------------------------------------------+
| Param            | This is only used for Window Title and        |
| (Title/No.)      | Window No.. this is the Input text that       |
| (input)          | represents the Windows Title or the Windows No.   |
|                  | of the new window to switch.                      |
|                  |                                                   |
|                  | Window Title refers to the name of the Web Window |
|                  | in the Window Tab.                                |
|                  |                                                   |
|                  | Window No. refers to the order of the Windows     |
|                  | (First is 1, Second is 2, etc.).                  |
+------------------+---------------------------------------------------+

### First Window

#### Objective
To switch to the first window in a Web browser.\
\
You need to complete Web Command: Open Window before doing this.\
\


#### Steps
Before: We need to switch to the first window in this Web browser.


\
Open Browser
1.  Set Browser Type as Microsoft Edge.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Open Window\

1.  Set Url.

All fields not seen here do not need to be filled.\
\
Switch Window
1.  Set Switch Mode as First Window.

All fields not seen here do not need to be filled.

After: Result shows that the Bot has switched to the first window in
this Web browser.



### Last Window

#### Objective
To switch to the last window in a Web browser.

You need to complete Web Command: Open Window before doing this.\
First, create this script:

#### Steps
Before: We need to switch to the last window in this Web browser.



Open Browser
1.  Set Browser Type as Microsoft Edge.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Open Window\

1.  Set Url.

All fields not seen here do not need to be filled.\
\
Switch Window
1.  Set Switch Mode as Last Window.

All fields not seen here do not need to be filled.

After: Result shows that the Bot has switched to the last window in this
Web browser.



### Previous Window

#### Objective
To switch to the previous window in a Web browser.

You need to complete Web Command: Open Window before doing this.\
First, create this script:

#### Steps

Before: We need to switch to the previous window in this Web browser.



Open Browser
1.  Set Browser Type as Microsoft Edge.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Open Window\

1.  Set Url.

All fields not seen here do not need to be filled.\
\
Switch Window
1.  Set Switch Mode as Previous Window.

All fields not seen here do not need to be filled.

After: Result shows that the Bot has switched to the previous window in
this Web browser.



### Window Title

#### Objective
To switch to another window based on the Title in a Web
browser.

You need to complete Web Command: Open Window before doing this.\
First, create this script:

#### Steps 

Before: We need to switch to Bing in this Web browser.


\
Open Browser
1.  Set Browser Type as Microsoft Edge.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Open Window\

1.  Set Url.

All fields not seen here do not need to be filled.\
\
Switch Window
1.  Set Switch Mode as Window Title.

2.  Set Param as "Bing".

All fields not seen here do not need to be filled.

After: Result shows that the Bot has switched to another window based on
the Title in this Web browser.



### Window No.

#### Objective
To switch to another window based on the Number in a Web
browser.

You need to complete Web Command: Open Window before doing this.\
First, create this script:

#### Steps 

Before: We need to switch to Bing in this Web browser.

\
Open Browser
1.  Set Browser Type as Microsoft Edge.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Open Window\

1.  Set Url.

All fields not seen here do not need to be filled.\
\
Switch Window
1.  Set Switch Mode as Window No.

2.  Set Param as "1".

All fields not seen here do not need to be filled.

After: Result shows that the Bot has switched to Bing in this Web
browser.



### Switch Browser

#### Objective
To switch to another Web browser.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Browser          | This dropdown list allows the user to switch the  |
| (Dropdown List)  | browser to:                                       |
|                  |                                                   |
|                  | a)  Internet Explorer                             |
|                  |                                                   |
|                  | b)  Google Chrome                                 |
|                  |                                                   |
|                  | c)  Microsoft Edge                                |
+------------------+---------------------------------------------------+

You need to complete Web Command: Open Window before doing this.\
First, create this script:

#### Steps

Before: We need to switch to Google Chrome.


\
Open Browser
1.  Set Browser Type as Microsoft Edge.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Switch Browser
1.  Set Browser as Google Chrome.

All fields not seen here do not need to be filled.

After: Result shows that the Bot has switched to Google Chrome.



### Set Element Value

#### Objective
To insert text or set a dropdown list in a webpage.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belong to the group.             |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Element Key      | The Element Key is the HTML data used to identify |
| (Dropdown List)  | the element. This dropdown list allows the user   |
|                  | to identify the element by:                       |
|                  |                                                   |
|                  | a)  ID                                            |
|                  |                                                   |
|                  | b)  Class Name                                    |
|                  |                                                   |
|                  | c)  Name                                          |
|                  |                                                   |
|                  | d)  CSS Selector                                  |
|                  |                                                   |
|                  | e)  Link Text                                     |
|                  |                                                   |
|                  | f)  Partial Link Text                             |
|                  |                                                   |
|                  | g)  Tag Name                                      |
|                  |                                                   |
|                  | h)  XPath (Recommended Default)               |
|                  |                                                   |
|                  | i)  JavaScript                                    |
+------------------+---------------------------------------------------+
| Key Value        | Input text that represents HTML data extracted    |
| (input)          | from the website used to locate the element.      |
+------------------+---------------------------------------------------+
| Set Mode         | \*Each item in the list has a Javascript (JS)   |
| (Dropdown List)  | version. If the default does not work, try using  |
|                  | the JS version.                                 |
|                  |                                                   |
|                  | This dropdown list allows the user to:            |
|                  |                                                   |
|                  | a)  Set Value - Insert data into a Text Box       |
|                  |                                                   |
|                  | b)  Set Value (JS) - Insert data into a Text Box  |
|                  |     with Javascript                               |
|                  |                                                   |
|                  | c)  Append Value - Delete Data from a Text Box.   |
|                  |                                                   |
|                  | d)  Append Value (JS) - Delete Data from a Text   |
|                  |     Box with Javascript.                          |
|                  |                                                   |
|                  | e)  Select Value by Index - Select data from a    |
|                  |     dropdown list by Index Number.                |
|                  |                                                   |
|                  | f)  Select Value by Index (JS) - Select data from |
|                  |     a dropdown list by Index Number with          |
|                  |     Javascript.                                   |
|                  |                                                   |
|                  | g)  Select Value by Number - Select data from a   |
|                  |     dropdown list by List Number.                 |
|                  |                                                   |
|                  | h)  Select Value by Number (JS) - Select data     |
|                  |     from a dropdown list by List Number with      |
|                  |     Javascript.                                   |
|                  |                                                   |
|                  | i)  Select Value by Text - Select data from a     |
|                  |     dropdown list by keyword.                     |
|                  |                                                   |
|                  | j)  Select Value by Text (JS) - Select data from  |
|                  |     a dropdown list by keyword with Javascript.   |
|                  |                                                   |
|                  | k)  Select Value by Value - Select data from a    |
|                  |     dropdown list by HTML Value.                  |
|                  |                                                   |
|                  | l)  Select Value by Value (JS) - Select data from |
|                  |     a dropdown list by HTML Value with            |
|                  |     Javascript.                                   |
+------------------+---------------------------------------------------+
| Value to Set     | Input text that represents:                       |
| (input)          |                                                   |
|                  | a)  Set Value or Set Value (JS) - Input text to   |
|                  |     be inserted into a text box                   |
|                  |                                                   |
|                  | b)  Select Value By Index/Number - Input Number   |
|                  |     for the OrangeBot to choose the value in a    |
|                  |     dropdown list.                                |
|                  |                                                   |
|                  | c)  Select Value by Text/Value - Input keyword or |
|                  |     HTML Value for the OrangeBot to choose the    |
|                  |     value in a dropdown list.                     |
+------------------+---------------------------------------------------+
| Post Checking    | This dropdown list allows the OrangeBot to check  |
| (Dropdown List)  | if it the inserted data is correct.               |
+------------------+---------------------------------------------------+

### Set Value

#### Objective
To insert text in a web page.

#### Steps

You need to complete Web Command: Open Browser before doing this.

First, create this script:

Before: The Bot needs to type the username in the Box.

Right click the username text box, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Set Element Value\

1.  Set Element Key as XPath.

2.  Set Key Value.

3.  Set Mode as Set Value.

4.  Set Value to Set.

All fields not seen here do not need to be filled.

After: Result shows that the Bot has set the username.

 

### Set Value (JS)

#### Objective
To insert text in a web page.

#### Steps 

You need to complete Web Command: Open Browser before doing this.

First, create this script:

Before: The Bot needs to type the username in the Box.

Right click the username text box, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.


\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Set Element Value\

1.  Set Element Key as XPath.

2.  Set Key Value.

3.  Set Mode as Set Value.

4.  Set Value to Set.

All fields not seen here do not need to be filled.

After: Result shows that the Bot has set the username.



### Set Value By Index

#### Objective
To select a value from a Dropdown List by Index.

#### Steps
You need to complete Web Command: Open Browser before doing this.

First, create this script:

Before: The Bot needs to select \"Afghanistan\" from the list.

Right click the dropdown list, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Set Element Value
1.  Set Element Key as XPath.

2.  Set Key Value.

3.  Set Mode as Select Value By Index.

4.  Set Value to Set as 0 (0 refers to 1st value).

All fields not seen here do not need to be filled.

After: The Bot has selected \"Afghanistan\" from the list.



### Set Value By Index (JS)

#### Objective
To select a value from a Dropdown List by Index.

#### Steps

You need to complete Web Command: Open Browser before doing this.

First, create this script:

Before: The Bot needs to select \"Afghanistan\" from the list.

Right click the dropdown list, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.


Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Set Element Value\

1.  Set Element Key as XPath.

2.  Set Key Value.

3.  Set Mode as Select Value By Index.

4.  Set Value to Set as 0 (0 refers to 1st value).

All fields not seen here do not need to be filled.

After: The Bot has selected \"Afghanistan\" from the list.



### Set Value By Number

#### Objective
To select a value from a Dropdown List by Number.

#### Steps
You need to complete Web Command: Open Browser before doing this.

First, create this script:

Before: The Bot needs to select \"Afghanistan\" from the list.

Right click the dropdown list, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Set Element Value
1.  Set Element Key as XPath.

2.  Set Key Value.

3.  Set Mode as Select Value By Number.

4.  Set Value to Set as 1.

All fields not seen here do not need to be filled.

After: The Bot has selected \"Afghanistan\" from the list.



### Set Value By Number (JS)

#### Objective
To select a value from a Dropdown List by Number.

#### Steps 

You need to complete Web Command: Open Browser before doing this.

First, create this script:

Before: The Bot needs to select \"Afghanistan\" from the list.

Right click the dropdown list, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.


\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Set Element Value
1.  Set Element Key as XPath.

2.  Set Key Value.

3.  Set Mode as Select Value By Number.

4.  Set Value to Set as 1.

All fields not seen here do not need to be filled.

After: The Bot has selected \"Afghanistan\" from the list.



### Set Value By Text

#### Objective
To select a value from a Dropdown List by Text.

You need to complete Web Command: Open Browser before doing this.

#### Steps

First, create this script:

Before: The Bot needs to select \"Afghanistan\" from the list.

Right click the dropdown list, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.


\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Set Element Value
1.  Set Element Key as XPath.

2.  Set Key Value.

3.  Set Mode as Select Value By Text.

4.  Set Value to Set as Afghanistan.

All fields not seen here do not need to be filled.

After: The Bot has selected \"Afghanistan\" from the list.

### Set Value By Text (JS)

#### Objective
To select a value from a Dropdown List by Text.

#### Steps

You need to complete Web Command: Open Browser before doing this.

First, create this script:

Before: The Bot needs to select \"Afghanistan\" from the list.

Right click the dropdown list, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

#### Steps
\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Set Element Value\

1.  Set Element Key as XPath.

2.  Set Key Value.

3.  Set Mode as Select Value By Text.

4.  Set Value to Set as Afghanistan.

All fields not seen here do not need to be filled.

After: The Bot has selected \"Afghanistan\" from the list.



### Set Value By Value

#### Objective
To select a value from a Dropdown List by Value.


#### Steps

You need to complete Web Command: Open Browser before doing this.

First, create this script:

Before: The Bot needs to select \"Afghanistan\" from the list.

Right click the dropdown list, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

Click the dropdown arrow.

Copy the value text (AFG).


Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Set Element Value\

1.  Set Element Key as XPath.

2.  Set Key Value.

3.  Set Mode as Select Value By Value.

4.  Set Value to Set as AFG.

All fields not seen here do not need to be filled.

After: The Bot has selected \"Afghanistan\" from the list.



### Set Value By Value (JS)

#### Objective
To select a value from a Dropdown List by Value.

#### Steps

You need to complete Web Command: Open Browser before doing this.

First, create this script:

Before: The Bot needs to select \"Afghanistan\" from the list.

Right click the dropdown list, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

Click the dropdown arrow.

Copy the value text (AFG).

\
Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Set Element Value\

1.  Set Element Key as XPath.

2.  Set Key Value.

3.  Set Mode as Select Value By Value.

4.  Set Value to Set as AFG.

All fields not seen here do not need to be filled.

After: The Bot has selected \"Afghanistan\" from the list.



### Set Element Password

#### Objective
To insert a password on a web page.\
You need to complete Web Command: Open Window before doing this.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belong to the group.             |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Element Key      | The Element Key is the HTML data used to identify |
| (Dropdown List)  | the element. This dropdown list allows the user   |
|                  | to identify the element by:                       |
|                  |                                                   |
|                  | a)  ID                                            |
|                  |                                                   |
|                  | b)  Class Name                                    |
|                  |                                                   |
|                  | c)  Name                                          |
|                  |                                                   |
|                  | d)  CSS Selector                                  |
|                  |                                                   |
|                  | e)  Link Text                                     |
|                  |                                                   |
|                  | f)  Partial Link Text                             |
|                  |                                                   |
|                  | g)  Tag Name                                      |
|                  |                                                   |
|                  | h)  XPath (Recommended Default)               |
|                  |                                                   |
|                  | i)  JavaScript                                    |
+------------------+---------------------------------------------------+
| Key Value        | Input text that represents HTML data extracted    |
| (input)          | from the website used to locate the element.      |
+------------------+---------------------------------------------------+
| Application Name | The Application Name refers to the chosen input   |
| (input)          | Name used when configuring Authentication         |
|                  | Configuration. The OrangeBot will extract the     |
|                  | password from Authentication Configuration with   |
|                  | this Application Name. Leave blank if not needed. |
+------------------+---------------------------------------------------+
| User ID/Name     | The User ID refers to the input chosen user ID    |
| (input)          | used when configuring Authentication              |
|                  | Configuration. The username for the               |
|                  | application/website is what the user would        |
|                  | usually choose. The OrangeBot will extract the    |
|                  | password from Authentication Configuration with   |
|                  | this User ID/Name. For example, if it is a        |
|                  | website, it will use the website username as the  |
|                  | User ID.                                          |
+------------------+---------------------------------------------------+
| Post Checking    | This dropdown list allows the OrangeBot to check  |
| (Dropdown List)  | if it the inserted data is correct.               |
+------------------+---------------------------------------------------+

#### Steps 

First, create this script:

Before: The Bot needs to type the password in the Box.

Right click the text box, then click Inspect.

Right-click the data highlighted in blue, then click Copy, then
click Copy Xpath.

Click Maintenance, and then click Authentication Configuration.

Click New.

1.  Set Application name.

2.  Set User ID.

3.  Set Password.

4.  Click Save.


Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Set Element Password
1.  Set Element Key as XPath.

2.  Set Element Value.

3.  Set Application Name.

4.  Set User ID.

All fields not seen here do not need to be filled.

After: Result shows that the Bot has set the password.



### Execute Java Script

#### Objective
To execute Javascript codes in a web page. This may require
some programming knowledge and experience with Javascript.\
You need to complete Web Command: Open Browser before doing this.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Script (input)   | Input text that represents the Javascript code    |
|                  | that will be executed.                            |
+------------------+---------------------------------------------------+
| Asynchronous ?   | Asynchronous JavaScript refers to techniques that |
| (Dropdown List)  | enable the non-blocking execution of code,        |
|                  | allowing long-running tasks to run in the         |
|                  | background without freezing the main thread of    |
|                  | execution. This is crucial in web development for |
|                  | maintaining a responsive user interface while     |
|                  | handling operations like fetching data from APIs, |
|                  | reading files, or handling user input.            |
|                  |                                                   |
|                  | This dropdown list allows the user to run the     |
|                  | Javascript by:                                    |
|                  |                                                   |
|                  | a)  Yes - Run multiple lines of code              |
|                  |                                                   |
|                  | b)  No - Run single line of code at a time        |
+------------------+---------------------------------------------------+

#### Steps

1.  Set Script.

All fields not seen here do not need to be filled.

### Switch Frame

#### Objective
To switch the webpage to another frame. In some cases, it is
recommended to switch the frame to the Default frame when going to a
new web page as some elements may not be visible to the OrangeBot in the
wrong frame. It is also recommended to test between Parent frame and
Default frame to see which works best.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Switch Mode      | This dropdown list allows the user to switch to:  |
| (Dropdown List)  |                                                   |
|                  | a)  Index: To another frame by the number of      |
|                  |     frames present. For example, inputting the    |
|                  |     Index as "1" will make the OrangeBot switch   |
|                  |     to the second frame.                          |
|                  |                                                   |
|                  | b)  Name: To another frame by identifying the     |
|                  |     name of that frame.                           |
|                  |                                                   |
|                  | c)  Parent Frame: To switch to the Parent frame.  |
|                  |                                                   |
|                  | d)  Default Frame: To switch to the Default       |
|                  |     frame.                                        |
+------------------+---------------------------------------------------+
| Index/Name       | Only used for Index or Name. Input text   |
|                  | that represents:                                  |
|                  |                                                   |
|                  | a)  Index: To another frame by the number of      |
|                  |     frames present. For example, inputting the    |
|                  |     Index as "1" will make the OrangeBot switch   |
|                  |     to the second frame.                          |
|                  |                                                   |
|                  | b)  Name: To another frame by identifying the     |
|                  |     name of that frame. The input text will be    |
|                  |     the name of the frame.                        |
+------------------+---------------------------------------------------+

### Index

#### Objective
To switch the webpage to the first frame (Index = 0 for
first, 1 for second)



First, create this script:

#### Steps

You need to complete Web Command: Open Browser before doing this.

Open Browser
3.  Set Browser Type as Google Chrome.

4.  Set Open with User Data as No.


Navigation
3.  Set Navigation Mode as Navigate URL

4.  Set URL Address for the website

All fields not seen here do not need to be filled.

Switch Frame
1.  Set Switch Mode as Index.

2.  Set Index/Name as 0.

All fields not seen here do not need to be filled.

### Parent Frame

#### Objective
To switch the webpage to the parent frame.


First, create this script:

#### Steps
You need to complete Web Command: Open Browser before doing this.

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Switch Frame
1.  Set Switch Mode as Parent Frame.

All fields not seen here do not need to be filled.

### Default Frame

#### Objective
To switch the webpage to the default frame.


#### Steps

You need to complete Web Command: Open Browser before doing this.

Open Browser
1.  Set Browser Type as Google Chrome.

2.  Set Open with User Data as No.

All fields not seen here do not need to be filled.

Navigation
1.  Set Navigation Mode as Navigate URL

2.  Set URL Address for the website

All fields not seen here do not need to be filled.

Switch Frame
1.  Set Switch Mode as Default Frame.

All fields not seen here do not need to be filled.

## OCR Command

### OCR Screen Alpha

#### Objective
To extract text from the PC Screen.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Cropped Path     | Do not edit. Input text that represents the   |
| (input)          | path of the folder where the OrangeBot will save  |
|                  | screenshots while running. This is automatically  |
|                  | generated.                                        |
+------------------+---------------------------------------------------+
| Crop Tool        | A button to extract location data from a          |
| (Button)         | Screenshot.                                       |
+------------------+---------------------------------------------------+
| X - Position     | Input text that represents the starting X         |
| (input)          | coordinates of where on the screen to extract the |
|                  | text. This is auto generated by using the Crop    |
|                  | Tool function.                                    |
+------------------+---------------------------------------------------+
| Y - Position     | Input text that represents the starting Y         |
| (input)          | coordinates of where on the screen to extract the |
|                  | text. This is auto generated by using the Crop    |
|                  | Tool function.                                    |
+------------------+---------------------------------------------------+
| Width (input)    | Input text that represents the Width (measurement |
|                  | of left to right) of where on the screen to       |
|                  | extract the text. This is auto generated by using |
|                  | the Crop Tool function.                           |
+------------------+---------------------------------------------------+
| Height (input)   | Input text that represents the Height             |
|                  | (measurement of up to down) of where on the       |
|                  | screen to extract the text. This is auto          |
|                  | generated by using the Crop Tool function.        |
+------------------+---------------------------------------------------+
| Enlargement      | Input text that represents the zoom level of the  |
| (input)          | OrangeBot on the location on screen where the     |
|                  | text is located when the OrangeBot is running.    |
|                  |                                                   |
|                  | Imagine it like the zoom feature on your camera.  |
|                  | The OrangeBot will take a screenshot of the text  |
|                  | on screen, and then zoom in several times to read |
|                  | the text.                                         |
|                  |                                                   |
|                  | The Default is 5, which means the OrangeBot will  |
|                  | zoom in on the extracted text 5 times to make     |
|                  | sure the extracted text data is correct.          |
+------------------+---------------------------------------------------+

#### Steps

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the Password text on screen.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A "Get Image" Window appears.

Open Teamviewer.

Open the "Get Image" window and click "Get Image".

Go back to OrangeWorkforce. The screenshot appears here. Click "Draw".

Click, hold and draw a box around the Password Text.

Click Crop Image.

Click Close.


1.  X & Y Positions are automatically filled.

2.  Width & Height are automatically filled.

3.  Set Enlargement as 5 (The Bot will enlarge the image by 5 times)

All fields not seen here do not need to be filled.

After: Check the Job Debugger and scroll down to see the results.

After: Result shows that the OrangeBot has extracted the password text.



### OCR Screen Number

#### Objective
To extract Numbers from the PC Screen.



#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Cropped Path     | Do not edit. Input text that represents the   |
| (input)          | path of the folder where the OrangeBot will save  |
|                  | screenshots while running. This is automatically  |
|                  | generated.                                        |
+------------------+---------------------------------------------------+
| Crop Tool        | A button to extract location data from a          |
| (Button)         | Screenshot.                                       |
+------------------+---------------------------------------------------+
| X - Position     | Input text that represents the starting X         |
| (input)          | coordinates of where on the screen to extract the |
|                  | text. This is auto generated by using the Crop    |
|                  | Tool function.                                    |
+------------------+---------------------------------------------------+
| Y - Position     | Input text that represents the starting Y         |
| (input)          | coordinates of where on the screen to extract the |
|                  | text. This is auto generated by using the Crop    |
|                  | Tool function.                                    |
+------------------+---------------------------------------------------+
| Width (input)    | Input text that represents the Width (measurement |
|                  | of left to right) of where on the screen to       |
|                  | extract the text. This is auto generated by using |
|                  | the Crop Tool function.                           |
+------------------+---------------------------------------------------+
| Height (input)   | Input text that represents the Height             |
|                  | (measurement of up to down) of where on the       |
|                  | screen to extract the text. This is auto          |
|                  | generated by using the Crop Tool function.        |
+------------------+---------------------------------------------------+
| Enlargement      | Input text that represents the zoom level of the  |
| (input)          | OrangeBot on the location on screen where the     |
|                  | text is located when the OrangeBot is running.    |
|                  |                                                   |
|                  | Imagine it like the zoom feature on your camera.  |
|                  | The OrangeBot will take a screenshot of the text  |
|                  | on screen, and then zoom in several times to read |
|                  | the text.                                         |
|                  |                                                   |
|                  | The Default is 5, which means the OrangeBot will  |
|                  | zoom in on the extracted text 5 times to make     |
|                  | sure the extracted text data is correct.          |
+------------------+---------------------------------------------------+

#### Steps

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the ID Number on screen.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.


A "Get Image" Window appears.

Open
Teamviewer.

Open
the "Get Image" window and click "Get Image".

Go back
to OrangeWorkforce. The screenshot appears here. Click "Draw".


Click, hold and draw a box around the ID Number.


Click Crop Image.


Click Close.



1.  X & Y Position are automatically filled.

2.  Width & Height are automatically filled.

3.  Set Enlargement as 5 (The Bot will enlarge the image by 5 times)

All fields not seen here do not need to be filled.

Use Toggle Breakpoint to see the Result below.
\
After: Check the Job Debugger and scroll down to see the results.



After: Result shows that the OrangeBot has extracted the ID Number.

### OCR Image Alpha

#### Objective
To extract a text value from an image file (PNG, JPEG, etc.).

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Cropped Path     | Do not edit. Input text that represents the   |
| (input)          | path of the folder where the OrangeBot will save  |
|                  | screenshots while running. This is automatically  |
|                  | generated.                                        |
+------------------+---------------------------------------------------+
| Source Image     | Input text that represents the path of the image  |
| Path (input)     | file that needs to be scanned.                    |
+------------------+---------------------------------------------------+
| X - Position     | Input text that represents the starting X         |
| (input)          | coordinates of where in the image to extract the  |
|                  | text. This can be extracted using Paint.          |
+------------------+---------------------------------------------------+
| Y - Position     | Input text that represents the starting Y         |
| (input)          | coordinates of where in the image to extract the  |
|                  | text. This can be extracted using Paint.          |
+------------------+---------------------------------------------------+
| Width (input)    | Input text that represents the Width (measurement |
|                  | of left to right) of where in the image to        |
|                  | extract the text. This can be extracted using     |
|                  | Paint.                                            |
+------------------+---------------------------------------------------+
| Height (input)   | Input text that represents the Height             |
|                  | (measurement of up to down) of where in the image |
|                  | to extract the text. This can be extracted using  |
|                  | Paint.                                            |
+------------------+---------------------------------------------------+
| Enlargement      | Input text that represents the zoom level of the  |
| (input)          | OrangeBot on the location in the image where the  |
|                  | text is located when the OrangeBot is running.    |
|                  |                                                   |
|                  | Imagine it like the zoom feature on your camera.  |
|                  | The OrangeBot will take a screenshot of the text  |
|                  | in the image, and then zoom in several times to   |
|                  | read the text.                                    |
|                  |                                                   |
|                  | The Default is 5, which means the OrangeBot will  |
|                  | zoom in on the extracted text 5 times to make     |
|                  | sure the extracted text data is correct.          |
+------------------+---------------------------------------------------+


#### Steps 
First, create this script:

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the \"State\" in
the picture.


Open the picture in Paint.

Hover your mouse in the area marked in red.

Lookat the bottom left to get the numbers.

These are the X and Y positions.

Draw a box around "State".

Look at the area in the bottom left.


This is the Width and Height.


1.  Set Source Image Path.

2.  Set X Position as per the method above.

3.  Set Y Position as per the method above.

4.  Set Width as per the method above.

5.  Set Height as per the method above.

6.  Width & Height are automatically filled.

7.  Set Enlargement as 5 (The Bot will enlarge the image by 5 times).

All fields not seen here do not need to be filled.

Use Toggle Breakpoint to see the Result below.
\
After: Check the Job Debugger and scroll down to see the results.


After: Result shows that the OrangeBot has extracted \"State\".

### OCR Image Number

#### Objective
To extract a number from an image.

#### Table Field
+------------------+---------------------------------------------------+
| Field            | Description                                       |
+------------------+---------------------------------------------------+
| Task Name        | Name of the task belonging to the group.          |
+------------------+---------------------------------------------------+
| Task Description | Input text that represents the Description to     |
| (input)          | describe the task. This is optional.          |
+------------------+---------------------------------------------------+
| Cropped Path     | Do not edit. Input text that represents the   |
| (input)          | path of the folder where the OrangeBot will save  |
|                  | screenshots while running. This is automatically  |
|                  | generated.                                        |
+------------------+---------------------------------------------------+
| Source Image     | Input text that represents the path of the image  |
| Path (input)     | file that needs to be scanned.                    |
+------------------+---------------------------------------------------+
| X - Position     | Input text that represents the starting X         |
| (input)          | coordinates of where in the image to extract the  |
|                  | text. This can be extracted using Paint.          |
+------------------+---------------------------------------------------+
| Y - Position     | Input text that represents the starting Y         |
| (input)          | coordinates of where in the image to extract the  |
|                  | text. This can be extracted using Paint.          |
+------------------+---------------------------------------------------+
| Width (input)    | Input text that represents the Width (measurement |
|                  | of left to right) of where in the image to        |
|                  | extract the text. This can be extracted using     |
|                  | Paint.                                            |
+------------------+---------------------------------------------------+
| Height (input)   | Input text that represents the Height             |
|                  | (measurement of up to down) of where in the image |
|                  | to extract the text. This can be extracted using  |
|                  | Paint.                                            |
+------------------+---------------------------------------------------+
| Enlargement      | Input text that represents the zoom level of the  |
| (input)          | OrangeBot on the location in the image where the  |
|                  | text is located when the OrangeBot is running.    |
|                  |                                                   |
|                  | Imagine it like the zoom feature on your camera.  |
|                  | The OrangeBot will take a screenshot of the text  |
|                  | in the image, and then zoom in several times to   |
|                  | read the text.                                    |
|                  |                                                   |
|                  | The Default is 5, which means the OrangeBot will  |
|                  | zoom in on the extracted text 5 times to make     |
|                  | sure the extracted text data is correct.          |
+------------------+---------------------------------------------------+

#### Steps

First, create this script:

Make sure to set the last task as Toggle Breakpoint. No need to edit
the Waiting task. Just add it to the script.

Before: We need to get the highlighted
number in the picture.

Openthe picture in Paint.

Hover your mouse in the area marked in red.

Look at the bottom left to get the numbers.

These are the X and Y positions.

Draw a box around the number.

Look at the area in the bottom left.


This is the Width and Height.


1.  Set Source Image Path.

2.  Set X Position as per the method above.

3.  Set Y Position as per the method above.

4.  Set Width as per the method above.

5.  Set Height as per the method above.

6.  Set Enlargement as 5 (The Bot will enlarge the image by 5 times).

All fields not seen here do not need to be filled.

Use Toggle Breakpoint to see the Result below.
\
After: Check the Job Debugger and scroll down to see the results.



After: Result shows that the OrangeBot has extracted number.



## Word Command

### Open Word

#### Objective
To open a Word File. (Word File will not be visible on
screen.)

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input Description to describe the task.
  Description    
  (input)        

  Word Path      Input text that represents the path of the Word file.
  (input)        
  -------------- --------------------------------------------------------

#### Steps

Word file must be closed before doing this.


1.  Set Word Path (file path of Word file).

All fields not seen here do not need to be filled.

After: The OrangeBot has opened the Word file..

### Close Word

#### Objective
To close a Word File.



#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input Description to describe the task.
  Description    
  (input)        
  -------------- --------------------------------------------------------

#### Steps

You need to complete Open Word before doing this.

1.  Set Word Path (file path of Word file).

All fields not seen here do not need to be filled.




1.  Set Task Order & Description.

All fields not seen here do not need to be filled.



### Create Empty Word

#### Objective
To create a new Word File.

#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input Description to describe the task.
  Description    
  (input)        

  Word Path      Input text that represents the path of the new Word
  (input)        file.
  -------------- --------------------------------------------------------

#### Steps



1.  Set Word Path (folder path with file name and Word extension at the
    end).

All fields not seen here do not need to be filled.


After: The OrangeBot has created a new Word file.



### Replace All Text

#### Objective
To replace text (current_date) to another text (21/06/2024)
in a word file.


#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Word Path      Input text that represents the path of the new Word
  (input)        file.

  Find What ?    Input text that represents the keyword text that needs
  (input)        to be replaced.

  Replace With   Input text that represents the new text that replace the
  (Table)        keyword text in "Find What?".
  (input)        
  -------------- --------------------------------------------------------

#### Steps

You need to complete Open Word before doing this.

1.  Set Word Path (file path of Word file).

All fields not seen here do not need to be filled.


1.  Set Word Path.

2.  Set Find What? (text inside Word)

3.  Set Replace With (text you want to replace inside).

All fields not seen here do not need to be filled.


After: The OrangeBot has replaced \"current_date\" with \"21/06/2024\".



### Get Table Value

#### Objective
To get data from a table in a word file.


#### Table Field
  -------------- --------------------------------------------------------
  Field          Description

  Task Name      Name of the task belong to the group

  Task           Input text that represents the Description to describe
  Description    the task. This is optional.
  (input)        

  Word Path      Input text that represents the path of the new Word
  (input)        file.

  Result Mode    This dropdown list allows the user to extract a
  (Dropdown      Table from the Word file.
  List)          

  Gvariable to   The OrangeBot will save the Result in a Gvariable
  Save (Dropdown created by the user. All Gvariables created/auto
  List)          generated will be in the list. For example, if the user
                 uses a Gvariable called "@Text@" and the Result is "1",
                 it will save the result in the Gvariable, so as a
                 result, "1" will be saved as the value of
                 "\@Text@".

  Header Name    Input text that represents the keyword present in the
  (Table)        Header of a table.
  (input)        

  Column Count   Input text that represents the number of columns in the
  (Table)        table.
  (input)        
  -------------- --------------------------------------------------------

#### Steps

You need to complete Open Word before doing this.

1.  Set Word Path (file path of Word file).

All fields not seen here do not need to be filled.



1.  Set Word Path.

2.  Set Result Mode as Table

3.  Set Header Name as State (First Column Header).

4.  Set Column Count (no of Columns).

All fields not seen here do not need to be filled.

You need to set Toggle Breakpoint to see the result below.

\
After: Check the Job Debugger and scroll down to see the results.

After: The OrangeBot has extracted the
table from the word file.



### Save Word

#### Objective
To save or export a word file.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Word Path   | Input text that represents the path of the Word file.  |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| New Path    | Input text that represents the path of the new         |
| (input)     | Word/PDF/XPS file.                                     |
+-------------+--------------------------------------------------------+
| Mode        | This allows the user to:                               |
| (Dropdown   |                                                        |
| List)       | a)  Save                                               |
|             |                                                        |
|             | b)  Save as                                            |
|             |                                                        |
|             | c)  Export as PDF File                                 |
|             |                                                        |
|             | d)  Export as XPS File                                 |
+-------------+--------------------------------------------------------+



### Save

#### Objective
To save a word file.

#### Steps

Make sure the Word app is closed.


1.  Set Word Path.

2.  Set Mode as Save.

All fields not seen here do not need to be filled.

### Save As

#### Objective
To save a word file in another location/name.

#### Steps

Make sure Word is closed.

1.  Set Word Path.

2.  Set New Path with a different name (or a different folder).

3.  Set Mode as Save as.

All fields not seen here do not need to be filled.



After: The OrangeBot has saved the word file under a different name..



### Export as PDF file

#### Objective
To convert a word file into PDF.

#### Steps

Make sure Word is closed.

1.  Set Word Path.

2.  Set New Path and change the extension to ".pdf".

3.  Set Mode as Export as PDF File.

All fields not seen here do not need to be filled.



After: The OrangeBot has exported the Word file to a PDF file.



### Export as XPS file

#### Objective
To convert a word file into an XPS file.

#### Steps

Make sure Word is closed.

1.  Set Word Path.

2.  Set New Path and change the extension to ".xps".

3.  Set Mode as Export as XPS File.

All fields not seen here do not need to be filled.

After: The OrangeBot has exported the word
file as an XPS file.



### Word Protection

#### Objective
To lock/unlock a word file from editing with a password.

#### Table Field
+-------------+--------------------------------------------------------+
| Field       | Description                                            |
+-------------+--------------------------------------------------------+
| Task Name   | Name of the task belong to the group                   |
+-------------+--------------------------------------------------------+
| Task        | Input text that represents the Description to describe |
| Description | the task. This is optional.                        |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Word Path   | Input text that represents the path of the Word file.  |
| (input)     |                                                        |
+-------------+--------------------------------------------------------+
| Protection  | This allows the user to:                               |
| Mode        |                                                        |
| (Dropdown   | a)  Protect                                            |
| List)       |                                                        |
|             | b)  Unprotect                                          |
+-------------+--------------------------------------------------------+
| Application | The Application Name refers to the chosen input Name   |
| Name        | used when configuring Authentication Configuration.    |
| (input)     | The OrangeBot will extract the password from           |
|             | Authentication Configuration with this Application     |
|             | Name. Leave blank if not needed.                       |
+-------------+--------------------------------------------------------+
| User        | The User ID refers to the input chosen user ID used    |
| ID/Name     | when configuring Authentication Configuration. The     |
| (input)     | username for the application/website is what the user  |
|             | would usually choose. The OrangeBot will extract the   |
|             | password from Authentication Configuration with this   |
|             | User ID/Name. For example, if it is a website, it will |
|             | use the website username as the User ID.               |
+-------------+--------------------------------------------------------+
| Password    | Input text that represents the password to lock/unlock |
| (input)     | the Word file.                                         |
+-------------+--------------------------------------------------------+



### Word Protect

#### Objective
To lock a word file from editing with a password.

#### Steps

Make sure the Word app is closed.

1.  Set Word Path.

2.  Set Protection Mode as Protect.

3.  Set password.

All fields not seen here do not need to be filled.

After:

The OrangeBot has restricted the Word file from editing.



### Word Unprotect

#### Objective
To unlock a protected file.


#### Steps 

Make sure the Word app is closed.

1.  Set Word Path.

2.  Set Protection Mode as UnProtect.

3.  Set password (depends on the Word file).

All fields not seen here do not need to be filled.

After: The OrangeBot has unlocked the Word
file.

## Microsoft Teams Command
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



