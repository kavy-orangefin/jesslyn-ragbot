Action Library Command Attend Command

If you have never used the Job Studio Designer, go to and to learn how to create and run a script before using the Action Library.

# Message Box 

## Objective
To create a Message Box on screen.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description (input) | Description to describe the task |
| Message to Display (input) | The input text that will be displayed in a message box once the OrangeBot runs the task. |

## Steps

All fields not seen here do not need to be filled.

- Set Message to Display as “123”.

- After: The Bot creates a Message Box with the message “123”. Click Okay to close.

# Confirmation

## Objective

To confirm a displayed message is accurate.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Message to Display | The text that will be displayed in a message box once the OrangeBot runs the task. For Confirmation tasks, it is usually used for Yes Or No questions. |
| If Not, Proceed to | This allows the user go to other tasks in the script if the user clicks No once the OrangeBot runs the task. |

## Steps

First, create this script:

In this case, we will have the OrangeBot ask “Are you below 65 years old?” If the user clicks Yes, it will send create a Message box. If No, it will skip to Task 3.

- Set Message to Display as “Are you below 65 years old?”.

After: The Bot will ask if the reader is below 65 years old. If the user clicks Yes, it will go to Task 2 and create a message box. If not, it will skip to Task 3 and exit the Job.

# Confirmation (Info)

## Objective

To confirm the displayed information is accurate.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Message to Display | The text that will be displayed in a message box once the OrangeBot runs the task. For Confirmation tasks, it is usually used for Yes Or No questions. |
| Confirmation | This will be the information that needs to be checked if it is accurate. If Yes, the user should click Yes. If No, the user should click No. |
| If Not, Proceed to | This allows the user to go to other tasks in the script if the user clicks No once the OrangeBot runs the task. |

## Steps

First, create this script:

In this case, we will have the OrangeBot ask “Is the Number Equal to 5?” If the user clicks Yes, it will display a message. If No, it will skip to Task 3.

Steps:

- Set Message to Display as “Is the number equal to 5? No: 5”.

- Set If Not Proceed to? as 3.

After: The Bot will ask if the Number equals to 5. If the user clicks Yes, it will go to Task 2 and send an email. If not, it will skip to Task 3 and exit the Job.

# Confirmation (Value Entry)

## Objective
To confirm if the displayed information of multiple types of data is accurate.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Confirmation Message | The text that will be displayed in a message box once the OrangeBot runs the task. For Confirmation tasks, it is used for Yes Or No questions. |
| Label Name | The labels that will be displayed in the Message Box when the OrangeBot runs the task. The user can place more than one as long as they use “;”. For example, “1;2;3”. |
| Field Type | This is the format of the information that will be displayed. There are 2 types of Field Type:<br>i) Text - String Format (Words, Numbers & Special Characters) ii) Date - Date Format (dd/MM/yyyy) |
| Default Value | The data that will be displayed in the Message Box when the OrangeBot runs the task. The user can place more than one as long as they use “;”. For example, “1;2;3”. |
| Gvariable to Save | The data placed here will be auto generate a Gvariable with the same name. The user can place more than one as long as they use “;”. For example, “1;2;3”. It must match the number of Default Values. If there are 3 default values, there must be 3 Gvariables. |
| If Not, Proceed to | This allows the user to go to other tasks in the script if the user clicks No once the OrangeBot runs the task. |

## Steps

First, create this script:

Make sure to set the last task as Toggle Breakpoint.



- Set Confirmation Message as “Is this Confirmed?”.

- Set Label Name as “Full Name;IC;Date of Birth”.

- Set Field Type as “Text;Text;Date”.

- Set Default Value as “John Doe;8626551651;24/7/1886”.

- Set Gvariable to Save as “GVariable1;GVariable2;GVariable3”.(this will create Global Variables)

- Set If Not Proceed to? as 3.

The Bot will ask if the details are correct (the user can edit the details). If the user clicks Yes, it will go to Task 2 and display a message. If not, it will skip to Task 3 and exit the Job.

If the user clicks Yes, then these Global Variables will be created.

Application Command

# Open Application

## Objective

To open an application. It can be any application as long as you can get the File Path. In this case, we will use Teamviewer as an example.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| Application Name | The File Path of an application chosen by the user. The OrangeBot will open this application when it runs the task. |

## Steps


Search for Teamviewer in the dashboard.

Click “Open File Location”.

Click Home, and click Copy Path.



- Set Application Name.

After: The Bot opens the Teamviewer application.

# Close Application

## Objective
To close an application (Teamviewer). It can be any application. In this case, we will use Teamviewer as an example.

## Steps

We need to close the Teamviewer application.

Search for Task Manager in the dashboard.

Click to open Task Manager.

Right click “Teamviewer”.

Copy the highlighted Text

- Set Process Name.

After: The Bot closes the Teamviewer application.

# Check Application Running

## Objective 
To check whether an application (Teamviewer) is running. It can be any application. In this case, we will use Teamviewer as an example.


## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| Process Name | The Process Name is taken from the Task Manager to represent the application the user wants to close. For example, the Process Name for the Word application would be “WINWORD”, though it may differ base on the user PC. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “1”, it will save the result in the Gvariable, so as a result, “1” will be saved as the value of “@Text@”. |

## Steps

Before: We need to check if the Bot can check whether Teamviewer is running

Search for Task Manager in the dashboard.

Click Teamviewer and take note of the name “Teamviewer”.

Right click “Teamviewer”.

Copy the highlighted Text.

You need to create a new Global Variable.


1. Set Process Name.

- Set Gvariable to Save.

After: Check Global Variable to see the results.

After: The Bot detects that it is true that the Teamviewer Application is running.

# Switch Application

## Objective
To switch to another application (Notepad) while on another application (Teamviewer). It can be any application. In this case, we will use Teamviewer and Notepad as an example.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| Process Name | The Process Name is taken from the Task Manager to represent the application the user wants to close. For example, the Process Name for the Word application would be “WINWORD”, though it may differ base on the user PC. |
| Application Title | The Application Title is taken from the Task Manager to represent the specific file the user wants to close. It usually correlates to the name of the File. |

## Steps 

Before: Teamviewer is open.

Before: Note pad is also open. We need the Bot to switch to Notepad.

Search for Task Manager in the dashboard.

Click to open Task Manager.

Click Notepad and take note of the name “Untitled - Notepad”.

You need to create a new Global Variable.


- Set Process Name.

- Set Application Title.

After: The Bot switched to Notepad.

# Maximize Window

## Objective
To maximize an application (Teamviewer) to full screen. It can be any application. In this case, we will use Teamviewer as an example.

## Input Table 
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| Target Window | The window on screen that the user wants to maximize to full screen. |


## Steps

Before: Teamviewer is in small screen.

- Set Target Window as Default.

The Bot minimizes Teamviewer to small screen.

# Connect Remote Desktop

## Objective
To connect to another PC using Remote Desktop.

## Input Table 

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| Remote Computer | The IP address of the remote PC (the PC the user wants to connect to). |
| User Name | The username for the remote PC. |
| Password | The password for the remote PC. |
| Resolution | The screen resolution of the remote PC. This is chosen by the user. |
| View Mode | How the Connect Desktop will appear on screen. There are 3 options:<br>Original - The “Connect Remote Desktop” display will appear in the same size as the original remote PC.<br>Shrink - The “Connect Remote Desktop” display will shrink to match the size of the window on the user PC (if the display is minimized, it will shrink).<br>Stretch - The “Connect Remote Desktop” display will shrink to match the size of the window on the user PC (if the display is maximized to full screen, it will stretch to full screen). |

Original means normal screen size, Shrink means the remote PC screen will shrink to fit your PC, and Stretch means full screen mode.

## Steps

First, you need to get the IP address for the remote PC (not your own PC):

- Click the Start button.

- Type cmd in the Search bar.

- Type ipconfig/all in the black and white window and press enter.

- Your IP address will be the IPv4 address.


- Set Remote Computer (IP Address for the remote PC)

- Set Username (for Remote PC).

- Set Password (for Remote PC).

- Set Resolution

- Set View Mode (chosen by user).

After: The Bot remote connects to another PC.

# Disconnect Remote Desktop​

## Objective

To disconnect a Remote Desktop connection.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |

## Steps

Remote Desktop must be enabled on the PC.

- Set Task Order & Description.


# Key in Password

## Objective
For the Bot to type out a password without inserting the password in the script. The OrangeBot will retrieve the password from Authentication Configuration.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| Application Name | The Application Name refers to the chosen Name used when configuring Authentication Configuration. |
| User ID/Name | The User ID refers to the chosen user ID used when configuring Authentication Configuration. The username for the application/website is what the user would usually choose. For example, if it is a website, it will user the website username as the User ID. |

## Steps
- Click Maintenance, and then click Authentication Configuration.

- Click New

- Set the Application Name as “Demo”.

- Set User ID as “userID”.

- Set Password as “password”.

- Set Application Name (same as set in Authentication Configuration).

- Set User ID (same as set in Authentication Configuration).

The Bot keys in the password without inserting the password in the script.

# Key in Password (Key Press)

## Objective
For the Bot to type out a password without inserting the password in the script. The OrangeBot will retrieve the password from Authentication Configuration.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| Application Name | The Application Name refers to the chosen Name used when configuring Authentication Configuration. |
| User ID/Name | The User ID refers to the chosen user ID used when configuring Authentication Configuration. The username for the application/website is what the user would usually choose. For example, if it is a website, it will user the website username as the User ID. |

## Steps
Click Maintenance, and then click Authentication Configuration.

Click New.

- Set the Application Name as “Demo”.

- Set User ID as “userID”.

- Set Password as “password”.


- Set Application Name (same as set in Authentication Configuration).

- Set User ID (same as set in Authentication Configuration).

After: The Bot keys in the password without inserting the password in the script.

# Generate New Password

## Objective
For the Bot to generate a random password.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| Application Name | The Application Name refers to the chosen Name used when configuring Authentication Configuration. |
| User ID/Name | The User ID refers to the chosen user ID used when configuring Authentication Configuration. The username for the application/website is what the user would usually choose. For example, if it is a website, it will user the website username as the User ID. |
| New Password Length | The number of characters of the generated password. For example, if the user sets it as 10, the random password will have 10 characters. |
| Include Upper Case Characters (N = No) | Allows the user to choose if the generated password includes upper case characters (A, B, C, etc.) Set Y for Yes.<br>Set N for No. |
| Include LowerCase Characters (N = No) | Allows the user to choose if the generated password includes lower case characters (a, b, c, etc.) Set Y for Yes.<br>Set N for No. |
| Include Numeric Digit (N = No) | Allows the user to choose if the generated password includes numbers (1, 2, 3, etc.) Set Y for Yes.<br>Set N for No. |
| Include Character Symbol (N = No) | Allows the user to choose if the generated password includes special characters (&, !, (, etc.) Set Y for Yes.<br>Set N for No. |

## Steps
Click Maintenance, and then click Authentication Configuration.

Click New.

- Set the Application Name as “Demo”.

- Set User ID as “userID”.

- Set Password as “password”.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.


- Set Application Name (same as set in Authentication Configuration).

- Set User ID (same as set in Authentication Configuration).

After: The Bot generates a new password.



# Compare String

## Objective
To compare two values.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Message to Display | The text that will be displayed in a message box once the OrangeBot runs the task. This is used for questions. |
| Value Source | The first value chosen by the user. (E.g. Sample Text) |
| Value/Regex to Compare | The second value chosen by the user. (E.g. Sample). For a Regex, it will be the Regex format chosen by the user. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@YesOrNo@” and the Result is “N” (No), it will save the result in the Gvariable, so as a result, “N” will be saved as the value of “@YesOrNo@”. |
| Compare Mode | The type of comparison chosen by the user. This includes:<br>Full Compare - Check if both values match 100%<br>Partial Compare - Check if both values match 100% before a chosen key word in either the Value Source or Value to Compare.<br>Contains - Check if a keyword in the Value to Compare is in the value source (e.g. is the keyword “Sample” in the text “Sample Text”.)<br>Regex Match - Checks if the Value to Compare follows a regex format chosen by the user.<br>Similarity - Checks if both values have at least a certain percentages of similarity (e.g. 0.8 for 80% similar) |
| Case Sensitive | The default setting recommended is No.<br>This allows the user to choose if the comparison needs to take into account whether the uppercase or lowercase letters match.<br>For example, if the user sets Case Sensitive as Yes:<br>Value Source: Mode<br>Value to Compare: mode<br>The result of the comparison will be N (No). The capital “M” does not match.<br>But if the user sets Case Sensitive as No.<br>Value Source: Mode<br>Value to Compare: mode<br>The result of the comparison will be Y(Yes). It will not matter if the capital “M” does not match, as long as the words remain the same. |
| Filtering | This allows the user to not include certain characters in a comparison. For example, if the user does not want to include “-”, then the user can set it to filter out “-” |
| Source end at | This only applies to Partial Compare. This will check if both values match 100% before a chosen key word in the Value Source.<br>For example, if the user sets “-” as the key word:<br>Value Source: Mode - Sample<br>Value to Compare: Mode<br>The result of the comparison will be Y (Yes). Both match before the key word “-”. |
| Source end at | This only applies to Partial Compare. This will check if both values match 100% before a chosen key word in the Value to Compare.<br>For example, if the user sets “-” as the key word:<br>Value Source: Mode<br>Value to Compare: Mode - Sample<br>The result of the comparison will be Y (Yes). Both match before the key word “-”. |

# Full Compare

## Objective
To compare if two values (Sample & Testing) are the same.

## Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.


- Set Value Source as “Sample”.

- Set Value to Compare as “Testing”.

- Set Gvariable to Save as @YesOrNo@.

- Set Compare Mode as Full Compare.

- Set Case Sentitive as Yes (Up to you).

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that No(N), the two values are not the same.

# Partial Compare

## Objective 
To compare if two values(Mode – Sample & Mode – Testing) are partially the same.

## Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.


- Set Value Source as “Mode – Sample”.

- Set Value to Compare as “Mode – Testing”.

- Set Gvariable to Save as @YesOrNo@.

- Set Compare Mode as Partial Compare Compare.

- Set Case Sentitive as Yes (Up to you).

- Set Source End At as “-”.

- Set Value End At as “-”.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that Yes (Y), the two values before “-“ are the same.

# Contains

## Objective
To compare if a value (Mode – Sample) contains another value (Mode).

## Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Step

- Set Value Source as “Mode – Sample”.

- Set Value to Compare as “Mode”.

- Set Gvariable to Save as @YesOrNo@.

- Set Compare Mode as Contains.

- Set Case Sentitive as Yes (Up to you).

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that Yes (Y), “Mode” is contained within “Mode – Sample”.

# Similarity

## Objective

To compare if a value (Mode – Sample) is similar to another value (Mode – Testing).

## Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.


- Set Value Source as “Mode – Sample”.

- Set Value to Compare as “Mode”.

- Set Gvariable to Save as @YesOrNo@.

- Set Compare Mode as Contains.

- Set Case Sentitive as Yes (Up to you).

- Set Similarity Threshold as 0.4 (40%).

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that Yes (Y), the two values are 40% similar.

# Compare Number

## Objective
 To compare two numbers.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Message to Display | The text that will be displayed in a message box once the OrangeBot runs the task. This is used for questions. |
| Value Source | The first number chosen by the user. (E.g. 123) |
| Value to Compare | The second value chosen by the user. (E.g. 234). |
| Condition | The type of comparison chosen by the user. This includes:<br>Equals (=) - Check if both numbers match 100%.<br>Not Equals (<>) - Check if both numbers do not match.<br>More Than (>) - Check if the Value Source is larger than the Value to Compare.<br>Less Than (<) - Check if the Value Source is smaller than the Value to Compare. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable. For example, if the user uses a Gvariable called “@YesOrNo@” and the Result is “N” (No), it will save the result in the Gvariable, so as a result, “N” will be saved as the value of “@YesOrNo@”. |

# Equals (=)

## Objective
To compare if two numbers (123 & 234) are the same.

## Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.


- Set Value Source as “123”.

- Set Value to Compare as “234”.

- Set Condition as =.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that No(N), the two values are not the same.

# Not Equals (<>)

## Objective
To compare if one number (123) is not equals to another number (234).

## Steps
Make sure to set Task 2 as Toggle Breakpoint.

Step

- Set Value Source as “123”.

- Set Value to Compare as “234”.

- Set Condition as <>.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that Yes (Y), the two values are not the same.

# More Than (>)

## Objective
To compare if one number (123) is more than another number (234).


## Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

- Set Value Source as “123”.

- Set Value to Compare as “234”.

- Set Condition as >.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that No(N), 123 is not more than 234.

# Less Than (<)

## Objective
To compare if one number (123) is less than another number (234).


## Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

- Set Value Source as “123”.

- Set Value to Compare as “234”.

- Set Condition as <.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that Yes(Y), 123 is less than 234.

# Compare Date

## Objective
To compare two dates.

## Input Table
| Field | Description |
| --- | --- |
|  |  |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Message to Display | The text that will be displayed in a message box once the OrangeBot runs the task. This is used for questions. |
| Value Source | The first number chosen by the user. (E.g. 23/11/2023) |
| Value to Compare | The second value chosen by the user. (E.g. 12/03/2023). |
| Condition | The type of comparison chosen by the user. This includes:<br>Equals (=) - Check if both numbers match 100%.<br>Not Equals (<>) - Check if both numbers do not match.<br>More Than (>) - Check if the Value Source is after the Value to Compare.<br>Less Than (<) - Check if the Value Source is before the Value to Compare. |
| Format | The date format chosen by the user. The user may use the following formats:<br>yyyyMMdd - 20251108<br>dd-MM-yyyy - 08-11-2025<br>dd/MM/yyyy - 08/11/2025<br>dd - 08<br>MM - 11<br>MMM - Nov<br>MMMM - November<br>yyyy - 2025<br>yy - 25 |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable. For example, if the user uses a Gvariable called “@YesOrNo@” and the Result is “N” (No), it will save the result in the Gvariable, so as a result, “N” will be saved as the value of “@YesOrNo@”. |

# Equals (=)

## Objective
To compare if two dates (23rd March 2022 & 7th May 2022) are the same.

## Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.



- Set Value Source as “20220323”.

- Set Value to Compare as “20220507”.

- Set Condition as =.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that No(N), the two dates are not the same.

# After (>)

## Objective
To compare if a dates (23rd March 2022) is after another date (7th May 2022).

## Steps

Make sure to set Task 2 as Toggle Breakpoint.

- Set Value Source as “20220323”.

- Set Value to Compare as “20220507”.

- Set Condition as >.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that No(N), the 23rd of March is not after the 7th of May.

# Before (<)

##Objective

To compare if a dates (23rd March 2022) is before another date (7th May 2022).

## Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.


- Set Value Source as “20220323”.

- Set Value to Compare as “20220507”.

- Set Condition as <.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that Yes(Y), the 23rd of March is before the 7th of May.

# If Else Statement

## Objective
To compare the value of two Global Variable.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Message to Display | The text that will be displayed in a message box once the OrangeBot runs the task. This is used for questions. |
| Gvariable | The first number chosen by the user that is saved in a global variable. (E.g. 123 saved in @Variable1@) |
| Value to Compare | The second number chosen by the user. (E.g. 234 saved in @Variable2@). |
| Condition | The type of comparison chosen by the user. This includes:<br>Equals (=) - Check if both numbers match 100%.<br>Not Equals (<>) - Check if both numbers do not match.<br>More Than (>) - Check if the Gvariable 1 is larger than the Gvariable 2.<br>Less Than (<) - Check if the Gvariable 1 is smaller than the Gvariable 2. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable. For example, if the user uses a Gvariable called “@YesOrNo@” and the Result is “N” (No), it will save the result in the Gvariable, so as a result, “N” will be saved as the value of “@YesOrNo@”. |

# Equals (=)

## Objective
To compare if two Global Variables (3 & 4) are the same.

## Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Go to Global Variable.

Click Add New Global Variable to Create Variable1, then click Save.

Click Add New Global Variable to Create Variable2, then click Save.


- Set Gvariable 1.

- Set Gvariable 2.

- Set Condition as =.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that No(N), the two variables are not the same.

# Not Equals (<>)

## Objective
To compare if one Variable (3) is not equal to another Variable (4).

##  Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Go to Global Variable.

Click Add New Global Variable to Create Variable1, then click Save.

Click Add New Global Variable to Create Variable2, then click Save.

Step

- Set Gvariable 1.

- Set Gvariable 2.

- Set Condition as <>.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that Yes(Y), 3 does not equal to 4.

# More Than (>)

## Objective: To compare if one Variable (3) is more than another Variable (4).

Make sure to set Task 2 as Toggle Breakpoint.

Go to Global Variable.

Click Add New Global Variable to Create Variable1, then click Save.

Click Add New Global Variable to Create Variable2, then click Save.

- Set Gvariable 1.

- Set Gvariable 2.

- Set Condition as >.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that No(N), 3 is not more than 4.

# Less Than (<)

## Objective: To compare if one Variable (3) is less than another Variable (4).

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Go to Global Variable.

Click Add New Global Variable to Create Variable1, then click Save.

Click Add New Global Variable to Create Variable2, then click Save.

Step

- Set Gvariable 1.

- Set Gvariable 2.

- Set Condition as <.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that Yes(Y), 3 is less than 4.

# And Or Statement

## Objective: To check if:

- Two statements are true.

- Two statements are false.

- One statement is true and one statement is false.

## Input Table 
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Mode 1 | This allows the user to use Compare String or Compare Number:<br>String - Same features as Compare String (Full Compare, Contains, etc.).<br>Number - Same features as Compare Number (=,<>,>,<, etc.). |
| Source Value 1 | The first value/number chosen by the user. (E.g. 1) |
| Target Value 1 | The second value/number chosen by the user. (E.g. 2). |
| Operator 1 | The type of comparison chosen by the user. For String, this includes:<br>Full Compare - Check if both values match 100%<br>Contains - Check if a keyword in the Value to Compare is in the value source (e.g. is the keyword “Sample” in the text “Sample Text”.)<br>For Number, this includes:<br>Equals (=) - Check if both numbers match 100%.<br>Not Equals (<>) - Check if both numbers do not match.<br>More Than (>) - Check if the Source Value 1 is larger than the Target Value 1.<br>Less Than (<) - Check if the Source Value 1 is smaller than the Target Value 1. |
| Criteria | This allows the user to set a Criteria of:<br>And - If Both statements are true, the Result will be Y (Yes). if only one statement is true, or both are false, the Result will be N (No).<br>Or - If at least one statement is true, the Result will be Y (Yes). if both are false, the Result will be N (No). |
| Mode 2 | This allows the user to use Compare String or Compare Number:<br>String - Same features as Compare String (Full Compare, Contains, etc.).<br>Number - Same features as Compare Number (=,<>,>,<, etc.). |
| Source Value 2 | The first value/number chosen by the user. (E.g. abc) |
| Target Value 2 | The second value/number chosen by the user. (E.g. bcd). |
| Operator 2 | The type of comparison chosen by the user. For String, this includes:<br>Full Compare - Check if both values match 100%<br>Contains - Check if a keyword in the Value to Compare is in the value source (e.g. is the keyword “Sample” in the text “Sample Text”.)<br>For Number, this includes:<br>Equals (=) - Check if both numbers match 100%.<br>Not Equals (<>) - Check if both numbers do not match.<br>More Than (>) - Check if the Source Value 2 is larger than the Target Value 2.<br>Less Than (<) - Check if the Source Value 2 is smaller than the Target Value 2. |
| Gvariable to Store Result | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@YesOrNo@” and the Result is “N” (No), it will save the result in the Gvariable, so as a result, “N” will be saved as the value of “@YesOrNo@”. |

# And

## Objective
To check if two statements are true at the same time.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

## Steps

- Set Mode 1 as Number.

- Set Source Value 1 as 1.

- Set Target Value 1 as 2.

- Set Operator 1 as >.

- Set Criteria as And.

- Set Mode 2 as String (refers to Text and/or Numbers).

- Set Source Value 2 as abc.

- Set Target Value 2 as abc.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that No(N), the two statements are not true.

# Or

## Objective
To check if only one out of two statements are true.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

## Steps

- Set Mode 1 as Number.

- Set Source Value 1 as 1.

- Set Target Value 1 as 2.

- Set Operator 1 as >.

- Set Criteria as Or.

- Set Mode 2 as String (refers to Text and/or Numbers).

- Set Source Value 2 as abc.

- Set Target Value 2 as abc.

- Set Gvariable to Save as @YesOrNo@.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that Yes(YN), at least one of the two statements are true.



# Create Database Client

## Objective: To give the Bot access to a Database.

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Server Name | The name of the sql server. Example : MSSQL2020 |
| Server Port (Odbc) | The name of the Server Port (Only for Odbc Clients) |
| Database Name | Name of database that the OrangeBot will retrieve data from. |
| User Name | Login Name for the Sql server |
| Password | Password for the Sql server |

# Sql Client

## Objective
To give the Bot access to a Database.

## Steps

- Set Client Name.

- Set Client Type as Sql Client.

- Set Server Name.

- Set Database Name.

- Set User Name.

- Set Password.

# Odbc Client

## Objective: To give the Bot access to a Database.

- Set Client Name.

- Set Client Type as Odbc Client.

- Set Server Port (Odbc)

- Set Server Name.

- Set Database Name.

- Set User Name.

- Set Password.

# Delete Database Client

## Objective: To disconnect the Bot from a Database.

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Client Name | The name of the Database Client |

*You need to complete “Database: Create Database Client” before doing this.

## Steps

- Set Client Name.

# Execute Query

## Objective
To execute a query for a Database.

You need to complete “Database: Create Database Client” before doing this.


## Input Table 
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Database Client Name | Name of database that the OrangeBot will retrieve data from. |
| Timeout | The total amount of time given for the OrangeBot to complete the task. The default is 180 seconds, which means that it will give the Bot a total of 3 minutes to complete the task. |

## Steps

- Set Database Client Name.

- Set Timeout (second).

- Set Sql Query as “SELECT Name FROM Customer WITH (NO LOCK)” (No lock means no authentication required).

# Execute SQL Query

## Objective
To execute an SQL query for a Database.

*You need to complete “Database: Create Database Client”before doing this.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Connection String | A connection string in the context of SQL Server is a text string that contains all the necessary information for an application to establish a connection to a SQL Server database. It acts as a set of instructions passed to a data provider, enabling it to locate the server, specify the database, and handle authentication. |
| SQL Query | This allows the user to provide an SQL statement for the OrangeBot to execute. |

## Steps

- Set Connection String.

- Set Timeout (second).

- Set Sql Query as “SELECT Name FROM Customer WITH (NO LOCK)” (No lock means no authentication required)

# Get Result From Database

## Objective
To extract info regarding Customer Names from a Database.

You need to complete “Database: Create Database Client”(click ) before doing this.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Database Client Name | Name of database that the OrangeBot will retrieve data from. |
| Timeout | The total amount of time given for the OrangeBot to complete the task. The default is 180 seconds, which means that it will give the Bot a total of 3 minutes to complete the task. |
| SQL Query | This allows the user to provide an SQL statement for the OrangeBot to execute. |

## Steps

- Set Database Client Name.

- Set Timeout (second).

- Set Sql Query as “SELECT Name FROM Customer WITH (NO LOCK)” (No lock means no authentication required)

# Email Command

# Search Unread Email

## Objective
To search an unread email.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Email Name | The name of the Email set by the user in Gateway Configuration. |
| Subject | The subject of the Email for the OrangeBot to search. It does not have to be the entire subject. For example, if the subject of the Email is “Customer Response #186”, the user can just set the subject as “Customer Response” and the Bot will find the email. |

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: This email is unread.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

## Steps

- Set Email Name (Get from Gateway Configuration)

- Set Subject (Get from unread email)

After: Check Global Variable to see the results.

After: The OrangeBot can find the unread email.

# Create Email

## Objective
To create and send an email with an attachment.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Email Name | The name of the Email set by the user in Gateway Configuration. |
| To | The email address of the Receiver who will receive the created email. |
| Cc | Cc refers to people who will receive the email but are not the main receivers. The email address of the people who will be cced in the email. There can be more than one email as long as “;” is used (e.g. sample1@gmail.com;sample2@gmail.com;sample3@gmail.com) |
| Bcc | Bcc refers to people who will receive the email but will be hidden for security reasons. The email address of the people who will be bcced in the email. There can be more than one email as long as “;” is used (e.g. sample1@gmail.com;sample2@gmail.com;sample3@gmail.com) |
| Subject | The subject of the created Email. This will be set by the user. |
| Body | The subject of the created Email chosen by the user. This will be set by the user. |
| Attachment | The File Path of the files that the user would want to attach to the created email. There can be more than one as long as “;” is used (e.g. C:\Users\InsiteMY\Downloads\sample1.pdf;"C:\Users\InsiteMY\Downloads\Untitled.png"\) |


## Steps

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).



- Set Email Name (Get from Gateway Configuration)

- Set To as the email for the recipient

- Set Subject

- Set Body

- Set Attachment as the file path for the PDF (optional)

After: The Bot sends an email with the attachment.

# Download Email

*You need to get the email using Search Unread Email.

## Objective
To download an Email.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Email Name | The name of the Email set by the user in Gateway Configuration. |
| Email ID | This is auto generated by the OrangeBot from Search Unread Email. The user must create a Search Unread Email before using this. |
| Save Path | The path of a Folder chosen by the user where the OrangeBot will download the email. |

## Steps
First, create this script:

Before: This email is unread.

Before: The folder is empty.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).


- Set Email Name (Get from Gateway Configuration

- Set Save Path as the folder path where the email will be downloaded

After: Result shows that the OrangeBot downloaded the email and named it after the current Date, Time and Seconds.

# Save Email Attachment

*You need to get the email using Search Unread Email.

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Email Name | The name of the Email set by the user in Gateway Configuration. |
| Email ID | This is auto generated by the OrangeBot from Search Unread Email. The user must create a Search Unread Email before using this. |
| File Extension | The file extension of the file that needs to be downloaded. (e.g. “.xlsx” for Excel, “.docx” for Word, etc.)<br>You can get the file extensions by referring to this list (click ) |
| Save Path | The path of a Folder chosen by the user where the OrangeBot will download the email. |

First, create this script:

## Objective: To download an email attachment from an unread email.

Before: We need to download the PDF from the unread email. The folder is empty.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

Step

- Set Email Name (Get from Gateway Configuration)

- Set File Extension as “.pdf” (depends on the attachment)

- Set Save Path as the folder path where the email will be downloaded (put a “/” at the end).

After: Result shows that the OrangeBot downloaded the attachment.

### Get Email Info

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Email Name | The name of the Email set by the user in Gateway Configuration. |
| Email ID | This is auto generated by the OrangeBot from Search Unread Email. The user must create a Search Unread Email before using this. |
| Field Name | The info that the OrangeBot will extract from the Email. |
| Save Path | The path of a Folder chosen by the user where the OrangeBot will download the email. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “1”, it will save the result in the Gvariable, so as a result, “1” will be saved as the value of “@Text@”. |

## Bcc

*You need to get the email using Search Unread Email

## Objective
To get the Bcc email from an unread email.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Bcc information from this unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.

## Steps

- Set Email Name (Get from Gateway Configuration)

- Set Field Name as Bcc

- Set Gvariable to Save

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Bcc email information.

# Cc

*You need to get the email using Search Unread Email (click )

## Objective
To get the Cc email from an unread email.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Bcc information from this unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.

## Steps

- Set Email Name (Get from Gateway Configuration)

- Set Field Name as Cc

- Set Gvariable to Save

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Cc email information.

# Content HTML

*You need to get the email using Search Unread Email.

## Objective
To get the Content Html information from an unread email.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.

## Steps

- Set Email Name (Get from Gateway Configuration)

- Set Field Name as Content Html

- Set Gvariable to Save

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Content Html email information.

#  Content Text

*You need to get the email using Search Unread Email

## Objective
To get the Content Text from an unread email.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

## Steps

- Set Email Name (Get from Gateway Configuration)

- Set Field Name as Content Text

- Set Gvariable to Save

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Content Text email information.

# Sender

*You need to get the email using Search Unread Email.

## Objective
To get the Sender email from an unread email.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.

## Steps

- Set Email Name (Get from Gateway Configuration)

- Set Field Name as Sender

- Set Gvariable to Save

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Sender email information.

# Sender Name

*You need to get the email using Search Unread Email

## Objective
To get the Sender Name from an unread email.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.

## Steps

- Set Email Name (Get from Gateway Configuration)

- Set Field Name as Sender Name

- Set Gvariable to Save

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Sender Name information.

# Sent Date

*You need to get the email using Search Unread Email.

## Objective
To get the Sent Date from an unread email.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread email.

## Steps 
Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.

- Set Email Name (Get from Gateway Configuration)

- Set Field Name as Sent Date

- Set Gvariable to Save

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved when and what time the email was sent.

# Subject

*You need to get the email using Search Unread Email.

## Objective
To get the Subject from an unread email.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.

## Steps

- Set Email Name (Get from Gateway Configuration)

- Set Field Name as Subject

- Set Gvariable to Save

Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Subject information.

# Recipient

*You need to get the email using Search Unread Email.

## Objective
To get the Recipient information from an unread email.


## Steps

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.

- Set Email Name (Get from Gateway Configuration)

- Set Field Name as Recipient

- Set Gvariable to Save

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Recipient information.

# Received Date

*You need to get the email using Search Unread Email.

## Objective: To get the Received Date information from an unread email.

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Content Html information from this unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.

## Steps

- Set Email Name (Get from Gateway Configuration)

- Set Field Name as Received Date

- Set Gvariable to Save

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Received Date information.

# Get Email Table

*You need to get the email using Search Unread Email.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Email Name | The name of the Email set by the user in Gateway Configuration. |
| Email ID | This is auto generated by the OrangeBot from Search Unread Email. The user must create a Search Unread Email before using this. |
| Result Ignore Header | This allows the user to not include the Table Header in the Result if it is set as Yes. If not, set it as No. |
| Result Ignore Footer | Footer refers to text below the table. If there is more text below the table, set it as Yes. If not, set it as No. |

## Objective
To get a table from an unread email.


## Steps
First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the table from the unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.


- Set Email Name (Get from Gateway Configuration)

- Set Result Ignore Header as No

- Set Result Ignore Footer as No

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the email table information.

# Get Email Form

*You need to get the email using Search Unread Email.

## Objective
 To get a Form from an unread email.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Email Name | The name of the Email set by the user in Gateway Configuration. |
| Email ID | This is auto generated by the OrangeBot from Search Unread Email. The user must create a Search Unread Email before using this. |
| Delimiter | This allows the user to split the data in the form by choosing a specific key word. One example can be “:”. |

## Steps

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the whole Form from the unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.


- Set Email Name (Get from Gateway Configuration)

- Set Delimiter as “:”.

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the email Form information.

# Get Form Field Value

*You need to get the email using Search Unread Email.

## Objective
To get a text value from an unread email.


## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Email Name | The name of the Email set by the user in Gateway Configuration. |
| Email ID | This is auto generated by the OrangeBot from Search Unread Email. The user must create a Search Unread Email before using this. |
| Delimiter | This allows the user to extract the data after a chosen key word/number/special character. One example can be “:”. |
| Field Name | The key word in the email for the OrangeBot to find so it can locate the data. For example, if the OrangeBot wants to find the Booking No, it will locate the data by looking for the keyword “BOOKING NO”. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “1”, it will save the result in the Gvariable, so as a result, “1” will be saved as the value of “@Text@”. |

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

Before: We need to get the Booking No information from the unread email.

Click Maintenance, and then click Gateway Configuration.

Select the email you have set and get the Email Name (set by user, so it will not be the same as the image).

You need to create a new Global Variable.

## Steps

- Set Email Name (Get from Gateway Configuration)

- Set Delimiter as “:”

- Set Field Name as “BOOKING NO” (Get from Email)

- Set Gvariable to Save

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has saved the Booking No information.

## Environment Command

The Screen Resolution is the number of pixels a screen can show horizontally and vertically. So, a screen with a resolution of 1920×1080 — 1080p or full HD — can display 1,920 pixels horizontally and 1,080 pixels vertically.

# Disk Usage

## Objective

To check how much space has been used in the C Drive of the Windows PCs.


## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Drive Letter | The Drive Folder chosen by the user for the OrangeBot to check how much of its storage is being used. |

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

## Steps

- Set Drive Letter as “C:\”.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found the C Drive has used over 71% of it’s space.

# Get Screen Resolution

## Objective
To get the Screen Resolution of the Windows PC.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |

First, create this script:

Make sure to set Task 2 as Toggle Breakpoint.

## Steps

- Set Task Order & Description.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found the current screen Resolution is 1920 x 1080 (this refers to Width X Height).

# Set Screen Resolution

## Objective
To set the Screen Resolution of the Windows PC.


## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| New Screen Resolution | The Screen Resolution chosen by the user for the user PC. |

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

## Steps

- Set New Screen Resolution as “1280 x 1024”.

After: Check Global Variable to see the results.

After: Result shows that the Bot has has changed to 1280 x 1024 (this refers to Width X Height).

# File/Folder Command

# Check File/Folder Existence

## Objective
To check the existence of a File/Folder in a PC.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| File/Folder to Check | The file/folder for the OrangeBot to check. |
| Checking Mode | This allows the user to check if:<br>Existence - The chosen file/folder exists.<br>Readable - The chosen file/folder has text data to extract.<br>Writable - The chosen file/folder can be edited. |
| Gvariable to Save Result. | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “true”, it will save the result in the Gvariable, so as a result, “true” will be saved as the value of “@Text@”. |

# Existence

## Objective 
To check the existence of a File in a PC.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to check if this File exists in the PC.

You need to create a new Global Variable.

## Steps

- Set the File/Folder to Check

- Set Checking Mode as Existence

- Set Gvariable as Text

After: Check Global Variable to see the results.

After: The Bot detects that it is “True” that the file exists.

# Readable

## Objective
To check if a File in a PC has text data to extract.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to check if this File has text data to extract.

You need to create a new Global Variable.

## Steps

- Set the File/Folder to Check

- Set Checking Mode as Existence

- Set Gvariable as Text

After: Check Global Variable to see the results.

After: The Bot detects that it is “True” that the file exists.

# Writable

## Objective
To check if a File in a PC is editable and not read-only.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to check if this File is editable.

You need to create a new Global Variable.

## Steps

- Set the File/Folder to Check

- Set Checking Mode as Existence

- Set Gvariable as Text

After: Check Global Variable to see the results.

After: The Bot detects that it is “True” that the file is editable.

# Get File/Folder Listing

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Folder Path to Get | The folder for the OrangeBot to check. |
| Mode | This allows the user to check the:<br>File - Retrieves the file path for all the files in the folder.<br>File (All) - Retrieves the file path for all the files within all the subfolders.<br>Folder - Retrieves the folder path for all the folders within the folder.<br>Folder (All) - Retrieves the folder path for all the folders within all the subfolders.<br>File and Folder - Retrieves the paths for all the files and folders within the folder.<br>File and Folder (All) - Retrieves the paths for all the files and folders within the folder within all the subfolders. |
| Gvariable to Save Result. | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “true”, it will save the result in the Gvariable, so as a result, “true” will be saved as the value of “@Text@”. |

# File

## Objective
To get the File Path of all the files in a Folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the files in the Folder.

You need to create a new Global Variable.

## Steps

- Set the Folder Path to Get (File Path for the Folder)

- Set Mode as File

- Set Gvariable to Get as Text

After: Check Global Variable to see the results.

After: The Bot finds the File Paths for all the files in the Folder.

# File (All)

## Objective
To get the File Paths for all files in a Folder and subfolders.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the File Paths for all the files in the Folder, including the subfolders.

Before: The subfolder “Sample” also has more files inside.

You need to create a new Global Variable.

## Steps

- Set the Folder Path to Get (File Path for the Folder)

- Set Mode as File (All)

- Set Gvariable to Get as Text

After: Check Global Variable to see the results.

After: The Bot finds the File Paths for all the files in the Folder and subfolders.

# Folder

## Objective
To get the File Path for all the folders within the Folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the Folder Paths for the Folders within the “Output” Folder.

You need to create a new Global Variable.

## Steps

- Set the Folder Path to Get (File Path for the Folder)

- Set Mode as Folder

- Set Gvariable to Get as Text

After: Check Global Variable to see the results.

After: The Bot finds the File Paths for all the Folders within the Output Folder.

# Folder (All)

## Objective

To get the File Paths for all the Folders in the Output Folder and subfolders.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the File Paths for all the Folders in the Output Folder, including the subfolders.

Before: Including the subfolders within “New Folder”.

You need to create a new Global Variable.

## Steps

- Set the Folder Path to Get (File Path for the Folder)

- Set Mode as Folder (All)

- Set Gvariable to Get as Text

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot finds the File Paths for all the Folders and subfolders in the Output Folder.

# File and Folder

## Objective
To get the File Path for all the files and folders in the Folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the File and folder Paths in the Folder.

You need to create a new Global Variable.

## Steps

- Set the Folder Path to Get (File Path for the Folder).

- Set Mode as File and Folder.

- Set Gvariable to Get as Text.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot finds the File and Folder Paths for all the Files and Folders in the New Folder.

# File and Folder (All)

## Objective
To get the File Paths for all the Files and Folders in the New Folder and subfolders.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the Files and Folder Paths for the latest Folder.

Before: Including the subfolders within “New Folder”.

Before: And Including the subfolders within “Sample”.

You need to create a new Global Variable.

## Steps

- Set the Folder Path to Get (File Path for the Folder)

- Set Mode as File and Folder (All)

- Set Gvariable to Get as Text

After: Check Global Variable to see the results.

After: The Bot finds the File Paths for all the Folders and subfolders in the Output Folder.

# Search File/Folder

## Objective
To search a Folder.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Folder to Search | The folder for the OrangeBot to check. |
| Search By | This allows the user to search by:<br>Keyword - This allows the user to search for files/folders with a specific keyword. If the user sets “Test” as a keyword, it will search for any file/folder that has the word “Test” within its name. |
| Search Value | Keyword used if the user wants to search for files/folders using a keyword (leave blank if not needed). |
| File extension | If the user only wants to search for pdf files, use “.pdf”. Leave blank to search for all files. |
| Search Options | The recommended default is Top Directory Only.<br>The OrangeBot can search for files/folders by:<br>All Directories: Includes all subfolders.<br>Top Directory Only: Includes only the direct files/folders in the chosen Folder. It will not search through subfolders. |
| Gvariable to Save Result. | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “true”, it will save the result in the Gvariable, so as a result, “true” will be saved as the value of “@Text@”. |

# File (File Path)

## Objective
To retrieve the File Paths for all the files in the New Folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Files Paths for all the files in the New Folder.

## Steps:

- Set the Folder to Search (Get the path for the New Folder)

- Set File or Folder as File

- Set Result Type as Full Path

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the file paths for all the files in the New Folder.



# File (File Name)

## Objective
To retrieve the Names for all the files in the New Folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Names for all the files in the New Folder.

Step:

- Set the Folder to Search (Get the path for the New Folder)

- Set File or Folder as File

- Set Result Type as File Name

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the Names for all the files in the New Folder.


# File (Keyword & File Path)

## Objective
To retrieve the File Paths for all the files in the New Folder based on the keyword Company.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Files Path for all the files in the New Folder based on the keyword Company.

## Steps

- Set the Folder to Search (Get the path for the New Folder)

- Set File or Folder as File

- Set Search By as Keyword

- Set Search Value as Company

- Set Result Type as Full Path

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the Files Path for all the files in the New Folder based on the keyword Company.



# File (Keyword & File Name)

## Objective

To retrieve the Names for all the files in the New Folder based on the keyword Statement.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Names for all the files in the New Folder based on the keyword Statement.

## Steps

- Set the Folder to Search (Get the path for the New Folder)

- Set File or Folder as File

- Set Search By as Keyword

- Set Search Value as Statement

- Set Result Type as File Name

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the Names for all the files in the New Folder based on the keyword Statement.



# Folder (File Path)

## Objective
To retrieve the File Paths for all the Folders in the New Folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the File Paths for all the Folders in the New Folder.

## Steps

- Set the Folder to Search (Get the path for the New Folder)

- Set File or Folder as Folder

- Set Result Type as Full Path

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the File Paths for all the Folders in the New Folder.


# Folder (File Name)

## Objective
To retrieve the Names for all the Folders in the New Folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Names for all the Folders in the New Folder.

## Steps

- Set the Folder to Search (Get the path for the New Folder)

- Set File or Folder as Folder

- Set Result Type as File Name

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the Names for all the Folders in the New Folder.



# Folder (Keyword & File Path)

## Objective
To retrieve the File Paths for all the Folders in the New Folder based on the keyword New.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the File Paths for all the Folders in the New Folder based on the keyword New.

## Steps

- Set the Folder to Search (Get the path for the New Folder)

- Set File or Folder as Folder

- Set Search By as Keyword

- Set Search Value as New

- Set Result Type as Full Path

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot retrieves the File Paths for all the Folders in the New Folder based on the keyword New.



# Folder (Keyword & File Name)

## Objective: To retrieve the Names for all the Folders in the New Folder based on the keyword New.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to retrieve the Names for all the Folders in the New Folder based on the keyword New.

## Steps

- Set the Folder to Search (Get the path for the New Folder)

- Set File or Folder as Folder

- Set Search By as Keyword

- Set Search Value as New

- Set Result Type as File Name

After: Check Global Variable to see the results.

After: The Bot retrieves the Names for all the Folders in the New Folder based on the keyword New.

# Delete File/Folder

## Objective
To delete the New Folder.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Message to Display | The text that will be displayed in a message box once the OrangeBot runs the task. This is used for questions. |
| File/Folder to Delete | The path of the file/folder chosen by the user to delete. |

Before: This is the New Folder.

Step:

- Set the File/Folder to Delete (Get the path for the New Folder)

After: The Bot deletes the New Folder.

# Move File/Folder

## Objective
To move a file/folder.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Source Full Path | The path of the file/folder chosen by the user to move. For example:<br>Folder: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Template\New folder\<br>File: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Template\Order Record.xlsx |
| Destination Full Path | The new path of the file/folder when it has been moved to a new folder. For example:<br>Folder: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Output\New folder\<br>File: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Output\Order Record.xlsx<br>In this example, we are moving the file/folder from the Template folder to the Output folder. |


# Move File/Folder

## Objective 
To move the New Folder into the Exception Folder.

We need to move the New Folder.

Before: We need to move the New Folder into the Exception Folder.

## Steps

- Set the Source Full Path (Get the path for New Folder)

- Set the Destination Full Path (Get the path for Exception and place the folder name “New folder” at the end)

After: The Bot moves the New Folder into the Exception folder
 

# Zip File/Folder

## Objective
To zip the Statement of Accounts PDF with a password. *We can also use this method for Folders.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| File/Folder to Zip | The path of the file/folder chosen by the user to zip with/without a password. For example:<br>Folder: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Template\New folder\<br>File: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Template\Order Record.xlsx |
| Output Path | The new path of the file/folder when it has zipped. For example:<br>Folder: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Output\New folder.zip<br>File: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Output\Order Record.zip<br>Make sure there is a “.zip” at the end. |
| Zip File Password | The password for the zipped file/folder. Leave blank if not needed. |
| Authentication App | This is optional. This allows the user to extract a chosen password from Authentication Configuration. The Authentication App refers to the chosen Name used when configuring Authentication Configuration. |
| Authentication User ID | This is optional. This allows the user to extract a chosen password from Authentication Configuration. The User ID refers to the chosen user ID used when configuring Authentication Configuration. The username for the application/website is what the user would usually choose. For example, if it is a website, it will use the website username as the User ID. |


Before: This is the PDF that needs to be zipped.

Before: We need to zip the Statement of Accounts PDF with a password into the Exception folder.

## Steps

- Set the File/Folder to Zip (Get the path for the file)

- Set Output Path (Get the path for the Exception folder and put the name of the PDF at the end with “.zip”)

- Set Zip File Password (Up to you)

*All fields not seen here do not need to be filled.

After: Check the Exception folder.

The Statement of Account PDF is zipped with a password.

When you open it, it should ask for the password. Just enter the password and you may access it.



# Unzip File/Folder

## Objective
To unzip the Statement of Accounts zipped file with a password.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Zip File Path | The path of the file/folder chosen by the user to unzip a file with/without a password. For example:<br>Folder: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Template\New folder.zip<br>File: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Template\Order Record.zip |
| Extract To | The path of the folder where it will place the unzipped file/folder. For example:<br>Extract Here: Default setting. The OrangeBot will extract the zipped file/folder to the same folder the zipped file is in.<br>Folder: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Output\<br>File: C:\Users\Desktop\Training Folder\OWF101\General Training (101) Advanced\Output\ |
| Zip File Password | The password for the zipped file/folder. Leave blank if there is no password. |
| Authentication App | This is optional. This allows the user to extract a chosen password from Authentication Configuration. The Authentication App refers to the chosen Name used when configuring Authentication Configuration. |
| Authentication User ID | This is optional. This allows the user to extract a chosen password from Authentication Configuration. The User ID refers to the chosen user ID used when configuring Authentication Configuration. The username for the application/website is what the user would usually choose. For example, if it is a website, it will use the website username as the User ID. |

Before: This is the zipped file that needs to be unzipped.

## Steps

- Set Zip File Path (Get the path for the file)

- Set Extract to (Get the path for the Exception folder and put the name of the PDF)

- Set Zip File Password (Up to you)

After: The Statement of Account file is unzipped.



# Get File/Folder Info

## Objective
To retrieve the info of a file/folder.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| File/Folder Path | The file/folder for the OrangeBot to check. |
| Get Mode | This allows the user to retrieve the info regarding:<br>File Name - Name of file with extension. (e.g. Statement of Accounts.pdf)<br>File Name (Without Extension) - Name of file without extension. (e.g. Statement of Accounts)<br>File Extension - File extension. (e.g. “.pdf”)<br>File Extension (Without Dot) - File extension without dot. (e.g. “pdf”)<br>Folder Name - File extension. (e.g. “.pdf”)<br>Folder Path - Name of folder. (e.g. New folder)<br>Created Time - When the File/Folder was created (e.g. 2023-09-08 06:46:01)<br>Last Modified Time - When the File/Folder was last modified (e.g. 2023-08-08 11:05:06)<br>Last Access Time - When the File/Folder was last accessed (e.g. 2023-08-08 11:05:06) |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “A”, it will save the result in the Gvariable, so as a result, “A” will be saved as the value of “@Text@”. |

# File Name

## Objective
To get the name of the File with the file extension.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the name of the highlighted file.

You need to create a new Global Variable.

## Steps

- Set File/Folder Path.

- Set Get Mode as File Name.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the name of the File with the Extension.


# File Name (Without Extension)

## Objective
To get the name of the File without the file extension.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the name of the highlighted file.

You need to create a new Global Variable.

## Steps

- Set File/Folder Path.

- Set Get Mode as File Name (Without Extension).

- Set Gvariable to Save.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the name of the File without the Extension.


# File Extension

## Objective
To get the file extension of a file.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the file extension of the highlighted file.

You need to create a new Global Variable.

## Steps

- Set File/Folder Path.

- Set Get Mode as File Extension.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the the File Extension, which is “.pdf”.



# File Extension (Without Dot)

## Objective
To get the file extension of a file without the dot.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the file extension of the highlighted file.

You need to create a new Global Variable.

## Steps

- Set File/Folder Path.

- Set Get Mode as File Extension (Without Dot).

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the the File Extension, which is “pdf”.



# Folder Name

## Objective
To get the name of a Folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the file extension of the highlighted file.

You need to create a new Global Variable.

## Steps

- Set File/Folder Path.

- Set Get Mode as Folder Name.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the name the Folder holding the file, which is “Sample”.

# Folder Path

## Objective
To get the path of a Folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the file extension of the highlighted file.

You need to create a new Global Variable.

## Steps

- Set File/Folder Path.

- Set Get Mode as Folder Path.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the path of the Folder holding the file.



# Created Time

## Objective 
To get the create time of a file/folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the file extension of the highlighted file.

You need to create a new Global Variable.

## Steps

- Set File/Folder Path.

- Set Get Mode as Created Time.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the created time of the file.

# Last Modified Time

## Objective
To get the last modified time of a file/folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the created time of the highlighted file.

You need to create a new Global Variable.

## Steps

- Set File/Folder Path.

- Set Get Mode as Last Modified Time.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the last modified time of the file.



# Last Access Time

## Objective
To get the last accessed time of a file/folder.

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the created time of the highlighted file.

You need to create a new Global Variable.

## Steps

- Set File/Folder Path.

- Set Get Mode as Last Access Time.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the last accessed time of the file.



# Create File/Folder

## Objective
To create a a text file or Folder. It is usually used to create folders, but it can create a text file as well.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| File/Folder to Create | The path of the text file or folder to create.<br>For example:<br>Folder - C:\Users\InsiteMY\Desktop\Training Folder\OWF201\General Training (201)\Output\Exception File\New folder\Sample\<br>File - C:\Users\InsiteMY\Desktop\Training Folder\OWF201\General Training (201)\Output\Exception File\New folder\Sample.txt |

# Folder

## Objective
To create a folder in this folder.

Before: We need to create a folder in this folder.

## Steps

- Set File/Folder to Create and set the name of the folder at the end.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot creates the “Sample” folder.

# File

## Objective: To create a file in this folder.

Before: We need to create a file in this folder.

## Steps

- Set File/Folder to Create and set the name of the file with “.txt” at the end.

After: Result shows that the Bot creates the “Sample” folder.

# Rename File/Folder

## Objective: To rename a File/Folder.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| File/Folder to Rename | The path of the text file or folder to create.<br>For example:<br>Folder - C:\Users\InsiteMY\Desktop\Training Folder\OWF201\General Training (201)\Output\Exception File\New folder\Sample\<br>File - C:\Users\InsiteMY\Desktop\Training Folder\OWF201\General Training (201)\Output\Exception File\New folder\Sample.txt |
| New File Name | The new name of the file/folder. |

# File

## Objective
To rename a File.

Before: We need to rename this file to “Testing”.

## Steps

- Set File/Folder to Rename.

- Set New File/Folder Name as “Testing”.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot renames it to “Testing”.

# Folder

## Objective
To rename a folder.

Before: We need to rename this folder to “Testing”.

## Steps

- Set File/Folder to Rename.

- Set New File/Folder Name as “Testing”.

After: Result shows that the Bot renames it to “Testing”.



# Read TXT File

## Objective 
To extract all the text in a txt File. (You can also use this to open the file with Microsoft Excel commands).

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| TXT File Path | The path of the text file to extract data or open in Excel |
| Read Result as | The format for the result text:<br>Text - extract all the text in a single paragraph.<br>Lines - Extract all text and arrange them in a list according to lines. So if there are 60 lines of text in the file, then there will be 60 items in the list. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “1”, it will save the result in the Gvariable, so as a result, “1” will be saved as the value of “@Text@”. |

# Text

## Objective
To extract all the text in a txt File. (You can also use this to open the file with Microsoft Excel commands).

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to extract this text.

You need to create a new Global Variable.

## Steps

- Set TXT File Path

- Set Read Result as Text.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

If you want to open the file in Excel, create an “Open Excel” then use the same path for the Excel Path.

After: Check Global Variable to see the results.

After: Result shows that the Bot saves all of the text in the txt file.

Then click Resume.

After: After reading, you can also use Microsoft Excel commands to open the file and read/edit.

After: It will open the Excel after you click Resume.



# Lines

## Objective
To extract all the text in a txt File in the form of a list. (You can also use this to open the file with Microsoft Excel commands).

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to extract this text.

You need to create a new Global Variable.

## Steps

- Set TXT File Path

- Set Read Result as Text.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

If you want to open the file in Excel, create an “Open Excel” then use the same path for the Excel Path.

After: Check Global Variable to see the results.

After: Result shows that the Bot saves all of the text in the txt file.

Then click Resume.

After: It will open the Excel after you click Resume.

# Write TXT File

## Objective: To edit a txt file.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| TXT File Path | The path of the text file to edit. |
| Writing Mode | This allows the user to choose how to edit the file. The two modes are:<br>Append: Add next text below the text in the file.<br>Overwrite: Delete the text in the file and replace the data with new text. |
| Content Type | The format for the inserted text:<br>Lines - Insert text inside the Text file.<br>Table - Insert a table inside the Text file. |
| Lines Value | Only used if the user selects “Lines” in Content Type. The user needs to place the text that needs to be inserted into the Text File. |

#### Append

## Objective: To append (add) text to the end of a TXT file.

Before: The Bot needs to add text to the end of the TXT file.

Step:

- Set TXT File Path.

- Set Writing Mode as Append.

- Set Content TYpe as Lines.

- Set Lines Value as Testing.

*All fields not seen here do not need to be filled.

After: The Bot has added “Testing” to the end of the TXT file.

# Overwrite

## Objective
To overwrite (replace) text in the TXT file.

Before: The Bot needs to overwrite (replace) text in the TXT file.

## Steps 

- Set TXT File Path.

- Set Writing Mode as Overwrite.

- Set Content Type as Lines.

- Set Lines Value as Testing.

After: The Bot has replaced the text with “Testing” in the TXT file.

# Read CSV File

## Objective 
To get all the text in a csv File. (You can also use this to open the file with Microsoft Excel commands)

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| CSV File Path | The path of the CSV file to edit. |
| Remove First Row | This allows the user to choose if the text result will include the first row. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “1”, it will save the result in the Gvariable, so as a result, “1” will be saved as the value of “@Text@”. |

First, create this script:

Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the text in this csv file.

You need to create a new Global Variable.

## Steps

- Set CSV File Path.

- Set Remove First Row as No.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

If you want to open the file in Excel, create an “Open Excel” then use the same path for the Excel Path.

After: Check Global Variable to see the results.

After: Result shows that the Bot saves all of the text in the csv file.

Then click Resume.

After: It will open the Excel after you click Resume.

# Write CSV File

## Objective
To edit a CSV file.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| CSV File Path | The path of the CSV file to edit. |
| Writing Mode | This allows the user to choose how to edit the file. The two modes are:<br>Append: Add next text below the text in the file.<br>Overwrite: Delete the text in the file and replace the data with new text. |
| Table Value to Write | The text of that will be inserted into the CSV file. |

# Append

## Objective
To append (add) text to the end of a CSV file.

Before : The Bot needs to add text to the end of the CSV file.

## Steps

- Set TXT File Path.

- Set Writing Mode as Append.

- Set Table Value.

After: The Bot has added the Booking No to the end of the TXT file.

# Overwrite

## Objective
To overwrite (replace) text in the CSV file.

Before: The Bot needs to overwrite (replace) text in the CSV file.

## Steps

- Set TXT File Path.

- Set Writing Mode as Overwrite.

- Set Table Value.

After: The Bot has replaced the text with “Testing” in the CSV file.

## Global Data Table Command

# Check Table/Set Exist

## Objective
To check if a Global Data Table/Set exists

## Inputr Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table/Set ? | This allows the user to choose if they would like to create a:<br>Data Set: The database that contains Data Tables inside it.<br>Data Table: Tables that contain data saved by the user. The user needs to create a Data Set before creating a Data Table. |
| Table/Set Name | The name of the Data Table/Set. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “true”, it will save the result in the Gvariable, so as a result, “true” will be saved as the value of “@Text@”. |

# Data Set

## Objective
To check if a Global Data Set exists.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

- Click Maintenance.

- Click Global Data Table.

Before: We need the Bot to check if “Data Set” exists. (Take Note of the Name “A Score”)

## Steps

- Set Table/Set as “Data Table”.

- Set Table/Set Name.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that the “Data Table” exists.

# Data Table

## Objective
To check if a Global Data Table exists.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

- Click Maintenance.

- Click Global Data Table.

Before: We need the Bot to check if “Data Table” exists. (Take Note of the Name “Masterlist”)

## Steps

- Set Table/Set as “Data Table”.

- Set Table/Set Name.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that the “Data Table” exists.


# Create Table/Set

## Objective
To create a new Data Set/Table.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table/Set ? | This allows the user to choose if they would like to create a:<br>Data Set: The database that contains Data Tables inside it.<br>Data Table: Tables that contain data saved by the user. The user needs to create a Data Set before creating a Data Table. |
| Data Set Name | The name of the Data Set. This must be filled regardless of whether the “Table/Set?” is set as Data Table or Data Set. |
| Data Table Name | The name of the Data Table. This must be filled if the “Table/Set?” is set as Data Table. |
| Template Name | The name of the Template Data Table used to create the Data Table. This must be filled if the “Table/Set?” is set as Data Table. The OrangeBot will use the Template Table as the template to create a new Data Table. |

# Data Set

## Objective
To create a new Data Set in the Global Variable Table.

## Steps

- Set Table/Set as Data Set.

- Set Data Set Name as “Demo”

After: Result shows that the Bot created a new Data Set.

# Data Table

## Objective: To create a new Data Table in the Global Variable Table.

*You need to complete Global Data Table: Create Data Set before doing this.

First, we need to create a template for the Data Table to follow.

- Click Maintenance.

- Click Global Data Table.

Click “New (Data Table)”.

Set Data Table Name as “Template”.

- Set Data Table Name as “Template”.

- Set Data Table Type as “Master List”.

- Set Create From as “New Table”.

Click “Add Column” until you have five Columns.

## Steps

- Set Table/Set as Data Table.

- Set Data Set Name as “Demo”.

- Set Data Table Name as “Sample”.

- Set Template Name.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot created a new Data Table under the Data Set “Demo”.



# Delete Table/Set

## Objective:
To delete a Data Table/Set in the Global Data Table.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table/Set ? | This allows the user to choose if they would like to create a:<br>Data Set: The database that contains Data Tables inside it.<br>Data Table: Tables that contain data saved by the user. The user needs to create a Data Set before creating a Data Table. |
| Data Set Name | The name of the Data Set. This must be filled regardless of whether the “Table/Set?” is set as Data Table or Data Set. |
| Table/Set Name | The name of the Data Table/Set to delete. |

# Data Set

## Objective
To delete a Data Set in the Global Data Table.

Before: We need to delete this Data Set.

## Steps

- Set Table/Set as Data Set.

- Set Table/Set Name as “Demo”.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot deleted the Data Set.



# Data Table

## Objective
To delete a new Data Table in the Global Data Table.

Before: We need to delete this Data Table.

## Steps:

- Set Table/Set as Data Table.

- Set Table/Set Name as “Demo”.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot deleted the Data Table.

# Get Table Info

## Objective
To retrieve the info regarding a Data Table.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |
| Mode | This allows the user to extract data regarding:<br>Row Count: How many rows are in the table.<br>Column Count: How many columns are in the table. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “1”, it will save the result in the Gvariable, so as a result, “1” will be saved as the value of “@Text@”. |

# Row Count

## Objective
To get the number of Rows in a Data Table.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the number of Rows in this Data Table called “Sample”.

You need to create a new Global Variable.

## Steps

- Set Table Name.

- Set Mode as Row Count.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that the Data Table has 1 Row.



# Column Count

## Objective
To get the number of Columns in a Data Table.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the number of Columns in this Data Table called “Sample”.

You need to create a new Global Variable.

## Steps 

- Set Table Name.

- Set Mode as Row Count.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that the Data Table has 5 columns.



# Insert Row Value

## Objective
To insert a new row in a Global Data Table.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |

Before: We need to add a new row to this Data Table.

## Steps

- Set Table Name.

After: Result shows that the Bot has added new rows to the Data Table.



# Set Cell Value

## Objective
To set a value inside a Global Data Table in Row 1 Column 1

##  Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |
| Row Lookup Mode | This allows the user to locate the cell to insert data:<br>By Row Count: The Row number that is specified (e.g. Row 2)<br>By Value: The value that is in the same row as the chosen cell (e.g. insert the data in the same row as the value “123”. |
| Row Lookup Column(s) | This allows the user to set which cell in the table to insert data by using:<br>By Row Count: The Row number where the data will be inserted (e.g. “2”)<br>By Value: The Column name where the OrangeBot will search the value (e.g. (Column1) |
| Row Lookup Value(s) | This must be filled if the Lookup Mode is set as By Value. This is the value that the OrangeBot will search for (e.g. 123). |
| Column Name | The Column where the OrangeBot will insert the data (e.g. Column2). |
| Value to Set | The data that will be inserted into the cell. |

# By Row No

## Objective
To set a value inside a Global Data Table in Row 1 Column 1.

Before: We need to set a value inside a Global Data Table in Row 1 Column 1. Take note of the Data Table Name (Sample) and Column Name (Column1).

## Steps

- Set Table Name.

- Set Row Lookup as By Row No.

- Set Row Lookup Column(s) as @Text@.

- Set Column Name.

- Set Value to Set as “123”.

After: Result shows that the Bot has added the value “123” to Row 1 Column 1.



# By Value

## Objective

To set a value inside a Data Table by looking for the value “123”.

Before: We need to set a value inside a Global Data Table in Column 2 by looking for the value “123”. Take note of the Data Table Name (Sample) and Column Name (Column1 & Column2).

## Steps:

- Set Table Name.

- Set Row Lookup as Value.

- Set Row Lookup Column(s) as Column1.

- Set Row Lookup Value(s) as 123.

- Set Column Name as Column 2.

- Set Value to Set as “5464”.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot has added the value “5464” in Column 2 in the same row as “123”.

# Get Cell Value

## Objective

To extract data from a cell in a Global Data Table.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |
| Row Lookup Mode | This allows the user to locate the cell to extract data:<br>By Row Count: The Row number that is specified (e.g. Row 2)<br>By Value: The value that is in the same row as the chosen cell (e.g. extract the data in the same row as the value “123”. |
| Row Lookup Column(s) | This allows the user to set which cell in the table to extract data by using:<br>By Row Count: The Row number where the data will be extracted (e.g. “2”)<br>By Value: The Column name where the OrangeBot will search the value (e.g. (Column1) |
| Row Lookup Value(s) | This must be filled if the Lookup Mode is set as By Value. This is the value that the OrangeBot will search for (e.g. 123). |
| Column Name | The Column where the OrangeBot will extract the data (e.g. Column2). |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “1”, it will save the result in the Gvariable, so as a result, “1” will be saved as the value of “@Text@”. |

# By Row No

## Objective
To get a value inside a Global Data Table in Row 1 Column 2.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the value inside a Global Data Table in Row 1 Column 2. Take note of the Data Table Name (Sample) and Column Name (Column1).

You need to create a new Global Variable.

## Steps

- Set Table Name.

- Set Row Lookup as By Row No.

- Set Row Lookup Column(s) as 1.

- Set Result Column as Column2.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the value “123” in Row 1 Column 2.



# By Value

## Objective
To get a value of a Row by looking for a value.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need get the value “123” by looking for “0”. Take note of the Data Table Name (Sample) and Column Name (Column1 & Column2).

## Steps

- Set Table Name.

- Set Row Lookup as Value.

- Set Row Lookup Column(s) as Column1.

- Set Row Lookup Value(s) as 0.

- Set Column Name as Column 2.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the value “123” in Row 1 Column 2.



# Get Row Value

## Objective
To extract the value of an entire row in a Global Data Table.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |
| Row Lookup Mode | This allows the user to locate the cell to extract data:<br>By Row Count: The Row number that is specified (e.g. Row 2)<br>By Value: The value that is in the same row(e.g. extract the data in the same row as the value “123”. |
| Row Lookup Column(s) | This allows the user to set which row in the table to extract data by using:<br>By Row Count: The Row number where the data will be extracted (e.g. “2”)<br>By Value: The Column name where the OrangeBot will search the value (e.g. (Column1) |
| Row Lookup Value(s) | This must be filled if the Lookup Mode is set as By Value. This is the value that the OrangeBot will search for (e.g. 123). |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “1”, it will save the result in the Gvariable, so as a result, “1” will be saved as the value of “@Text@”. |

# By Row No

## Objective
To get the value of the entire Row 1.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the value inside a Global Data Table in Row 1. Take note of the Data Table Name (Sample) and Column Name (Column1).

You need to create a new Global Variable.

## Steps

- Set Table Name.

- Set Row Lookup as By Row No.

- Set Row Lookup Column(s) as 1.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the value in Row 1.

# By Value

## Objective
To get a value of a Row by looking for a value.

Before: We need get the value in Row 1 by looking for “123”. Take note of the Data Table Name (Sample) and Column Name (Column1 & Column2).

## Steps

- Set Table Name.

- Set Row Lookup as Value.

- Set Row Lookup Column(s) as Column2.

- Set Row Lookup Value(s) as “123”.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the value in Row 1.



# Set Row Value

## Objective

To insert a row into a Global Data Table. *You need to complete “Global Data Table: Get Row Value” before doing this.

## Input Table 
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |
| Row Lookup Mode | This allows the user to locate the cell to insert data:<br>By Row Count: The Row number that is specified (e.g. Row 2)<br>By Value: The value that is in the same row as the chosen cell (e.g. insert the data in the same row as the value “123”. |
| Row Lookup Column(s) | This allows the user to set which cell in the table to insert data by using:<br>By Row Count: The Row number where the data will be inserted (e.g. “2”)<br>By Value: The Column name where the OrangeBot will search the value (e.g. (Column1) |
| Row Lookup Value(s) | This must be filled if the Lookup Mode is set as By Value. This is the value that the OrangeBot will search for (e.g. 123). |
| Value to Set | The row data that will be inserted into the cell. The user needs to complete Get Row Value before doing this action in order to save the row data into a chosen Gvariable, in this case, “@Text@”. |

# By Row No

## Objective
To insert a row into a Global Data Table in Row 6. *You need to complete “Global Data Table: Get Row Value” before doing this.

Before: We need insert an entire row with values inside a Global Data Table in the last row. Take note of the Data Table Name (Sample) and Column Name (Column1).

## Steps

- Set Table Name.

- Set Row Lookup Mode as By Row No.

- Set Row Lookup Column(s) as 6.

- Set Column Name as By List Value.

- Set Value to Set.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot inserts the row of values in the last row.

# By Value

## Objective
To insert a row into a Global Data Table in the same row as “123”. *You need to complete “Global Data Table: Get Row Value” before doing this.

Before: We need insert an entire row with values inside a Global Data Table in the first row. Take note of the Data Table Name (Sample) and Column Name (Column1).

## Steps

- Set Table Name.

- Set Row Lookup Mode as By Value.

- Set Row Lookup Column(s) as Column2.

- Set Row Lookup Valuse as 123.

- Set Column Name as By Default Value.

- Set Value to Set.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot inserts the row of values in the first row.



# Get Table Value

## Objective
To get the value of the entire Global Data Table.

## Input Field

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “1”, it will save the result in the Gvariable, so as a result, “1” will be saved as the value of “@Text@”. |

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the value inside the Global Data Table.

You need to create a new Global Variable.

## Steps

- Set Table Name.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the value of the entire Global Data Table.

# Insert Range Value

## Objective
To insert an entire table in a Global Data Table.


## Input Table 
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |
| Value to Set | The row data that will be inserted into the cell. The user needs to complete Get Table Value before doing this action in order to save the row data into a chosen Gvariable, in this case, “@Text@”. |

*You need to complete “Global Data Table: Get Table Value” before doing this.

Before: We need to insert this table inside a Global Data Table.

Before: We need to insert the range below this Global Data Table. Take note of the Data Table Name (Sample) and Column Name (Column1).

You need to create a new Global Variable.

## Steps

- Set Table Name.

- Set Value to Set.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot has inserted the range into the Global Data Table.

### 

# Get Column Value

## Objective
To extract the data from an entire column in a Global Data Table.


## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |
| Lookup Mode | This allows the user to locate the column to extract data:<br>By Column No: The OrangeBot will extract the data from the specified Column No (e.g. 1,2,3, etc.)<br>By Column Name: The OrangeBot will extract the data from the specified Column Name (e.g. Column1, State, etc.) |
| Lookup Value | The Column No or Name specified. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “1”, it will save the result in the Gvariable, so as a result, “1” will be saved as the value of “@Text@”. |

# By Column No

## Objective
To get the value of Column 1 of the Global Data Table based on the Column No.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the value inside Column 1 of the Global Data Table based on the Column No.

You need to create a new Global Variable.

## Steps

- Set Table Name.

- Set Lookup Mode as By Column No.

- Set Lookup Value as “1”.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the value of Column 1 of the Global Data Table based on the Column No.

# By Column Name

## Objective
To get the value of Column 1 of the Global Data Table based on the Column Name.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to get the value inside Column 1 of the Global Data Table based on the Column No.

You need to create a new Global Variable.

## Steps

- Set Table Name.

- Set Lookup Mode as By Column Name.

- Set Lookup Value as “Column1”.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot gets the value of Column 1 of the Global Data Table based on the Column Name.



# Search Cell

## Objective
To search for all the cells with the value “0” inside a Global Data Table and extract data regarding if it exists, how many cells have that value, etc.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |
| Searching Column(s) | The Column where the OrangeBot will extract the data (e.g. Column2). |
| Searching Value(s) | This is the value that the OrangeBot will search for (e.g. 123). |

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the value “0” inside Column 1 of the Global Data Table.

## Steps

- Set Table Name.

- Set Search Column(s) as Column1.

- Set Lookup Value as “0”.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot is able to find the value “0” in the table (True), how many “0”s there are (4) and which rows (2,3,4,5).



#Delete Row

## Objective
To delete a Row in the Global Data Table.

## Input Tab;e
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |
| Row Lookup Mode | This allows the user to locate the cell to insert data:<br>By Row Count: The Row number that is specified (e.g. Row 2)<br>By Value: The value that is in the same row as the chosen cell (e.g. insert the data in the same row as the value “123”. |
| Row Lookup Column(s) | This allows the user to set which cell in the table to insert data by using:<br>By Row Count: The Row number where the data will be deleted (e.g. “2”)<br>By Value: The Column name where the OrangeBot will search the value (e.g. (Column1) |
| Row Lookup Value(s) | This must be filled if the Lookup Mode is set as By Value. This is the value that the OrangeBot will search for (e.g. 123). |
| Delete Mode | Set as Delete. |

# By Row No

## Objective: To delete a Row in the Global Data Table by Row No.

Before: We need to delete the first row.

## Steps:

- Set Table Name.

- Set Row Lookup mode as By Row No.

- Set Row Lookup Column(s) as 1.

- Set Delete Mode as Delete.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot deletes the first Row.



# By Value

## Objective
To delete a Row in the Global Data Table by Value.

Before: We need to delete the row with the value "2".

## Steps

- Set Table Name.

- Set Row Lookup mode as By Value.

- Set Row Lookup Column(s) as First.

- Set Row Lookup Value(s) as 2.

- Set Delete Mode as Delete.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot deletes the first Row.

# Check Value Exist

## Objective
To check if a text value (State) exists inside the table.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Table Name | The name of the Data Table. |
| Column(s) to Check | The Column where the OrangeBot will search for the data (e.g. Column2). |
| Values(s) to Check | This is the value that the OrangeBot will search for (e.g. 123). |
| Check Condition | The OrangeBot will check if the value is:<br>Exactly: Is exactly the same as all the data in the cell. For example, if the searched value is “123” and the value in the cell is also exactly “123”, it will be marked as true.<br>Contains: Is a partial match with the data in the cell. For example, if the searched value is “1” and the value in the cell is “123”, it will be marked as true. |
| Case Sensitive | The default setting recommended is No.<br>This allows the user to choose if the comparison needs to take into account whether the uppercase or lowercase letters match. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “true”, it will save the result in the Gvariable, so as a result, “true” will be saved as the value of “@Text@”. |

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to check if "State" exists in the Table.

## Steps

- Set Table Name.

- Set Column to Check as Column1 (follow the name of the Column).

- Set Value to Check as State.

- Set Check Condition (Contains or Exactly).

- Set Case Sensitivity (Sensitive means exact title case, Insensitive means title case can be different)

- Set Gvariable as @TrueOrFalse@.

*All fields not seen here do not need to be filled.

*You need to use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has found that "State" exists.

# Google Drive Command

# Initialize Service

## Objective
For the Bot to gain access to Google Drive.


## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Google Credentials Path | The path of the JSON file that will be used as credentials to access the Google Drive. |

## Steps

Go to https://console.cloud.google.com/.

Click “Select a project”.

Click “New Project”.

Create a New Project.

Click “APIs & Services”, and then click “Credentials”.

Click on the project you just created.

Click “Manage service accounts”.

Click “Create Service Account”.

Create a Service Account.

Click “Done”.

Click on the Email.

Click “Add Key”.

Click “Create new key”.

Create a JSON file.

It should download a JSON file.

Search for “Google Drive API”.

Click “Enable”.

Search for “Google Sheets API”.

Click “Enable”.


- Set Google Credentials Path as the file path for the JSON file.

# Create Permission

## Objective: To give access to another user to a Google Drive File.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| File ID | The ID of the Google Drive File. |
| Role | This gives permission for another user as a:<br>Writer: The user gets permission to edit the file<br>Reader: The user gets permission to read the file, not to edit. |

# Writer

## Objective: To give access to another user to edit a Google Drive File.

First, create this script:

Before: We need to give access of this Google Drive file to a new user.

We need to get the File ID first.

## Steps

- Set File ID.

- Set Email.

- Set Role as Writer.

*All fields not seen here do not need to be filled.

After: The OrangeBot has given access of the Google Drive file to a new user with this email as an Editor.



# Reader

## Objective
To give access to another user to read a Google Drive File.

First, create this script:

Before: We need to give access of this Google Drive file to a new user.

We need to get the File ID first.

## Steps

- Set File ID.

- Set Email.

- Set Role as Reader.

*All fields not seen here do not need to be filled.

After: The OrangeBot has given access of the Google Drive file to a new user with this email as a Viewer.



# Create File/Folder

## Objective
For the Bot to create a Google Doc.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| Folder ID | The ID of the Google Drive Folder. Fill in if creating a File. The OrangeBot will create the file inside the chosen Google Drive folder. |
| File/Folder Name | Name of the file/folder to create |
| File/Folder Type | This allows the user to create:<br>Google Docs<br>Google Sheets<br>Google Slides<br>Folder |

# Google Doc

## Objective
For the Bot to create a Google Doc.

First, create this script:

Before: We need to create a Google Doc in the “Demo Folder”.

We need to get the Folder ID first.

## Steps

- Set Folder ID.

- Set File/Folder Name as “Demo”.

- Set File/Folder Type as Google Doc.

After: The OrangeBot create a Google Doc called “Demo”.



# Google Sheet

## Objective
For the Bot to create a Google Sheet.

First, create this script:

Before: We need to create a Google Sheet in the “Demo Folder”.

We need to get the Folder ID first.

## Steps

- Set Folder ID.

- Set File/Folder Name as “Demo”.

- Set File/Folder Type as Google Sheet.

After: The OrangeBot create a Google Sheet called “Demo”.



# Google Slides

## Objective
For the Bot to create a Google Slide.

First, create this script: Before: We need to create a Google Slides in the “Demo Folder”.

## Steps

- Set Folder ID.

- Set File/Folder Name as “Demo”.

- Set File/Folder Type as Google Slide.

After: The OrangeBot create a Google Slide called “Demo”.

# Folder

## Objective
For the Bot to create a Google Drives Folder.

First, create this script: Before: We need to create a Google Drive Folder in the “Demo Folder”.

We need to get the Folder ID first.

## Steps

- Set Folder ID.

- Set File/Folder Name as “Demo”.

- Set File/Folder Type as Folder.

After: The OrangeBot create a Folder called “Demo”.

# Search File/Folder

## Objective
For the Bot to search for a File/Folder.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| Folder ID | The ID of the Google Drive Folder. Fill in if searching a File. The OrangeBot will search for the files inside the chosen Google Drive folder. |
| File/Folder Name | Name of the file/folder to search. |
| Action Mode | This allows the user to search for:<br>File<br>Folder |

# File

## Objective
For the Bot to search for a File.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the “Demo” file.

We need to get the Folder ID first.

## Steps

- Set Folder ID.

- Set File/Folder Name as “Demo”.

- Set Action Mode as File.

After: Check Global Variable to see the results.

After: The OrangeBot gets the File ID of the “Demo” file.



# Folder

## Objective
For the Bot to search for a Folder.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the “Example” Folder.

We need to get the Folder ID first.

## Steps

- Set Folder ID.

- Set File/Folder Name as “Example”.

- Set Action Mode as Folder.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The OrangeBot gets the Folder ID of the “Example” Folder.



# Download File

## Objective: For the Bot to download a File.

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| File ID | The ID of the Google Drive File. |
| File Path | The path of the file after it has been downloaded. |

First, create this script:

Before: We need to download the “Demo” file into the “Save Email Attachment” folder.

We need to get the File ID first.

Step:

- Set File ID.

- Set File Path as the folder path ending with “\Demo.docx”.

After: The OrangeBot downloaded the “Demo” file.

# Export Google Sheets

## Objective
For the Bot to export a file.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group. |
| Task Description | Description to describe the task. |
| File ID | The ID of the Google Drive File. |
| File Path | The path of the file after it has been downloaded. |
| Mime Type | The format of the file when it is exported. The OrangeBot can export the file as a:<br>CSV<br>PDF<br>XLSX (Excel file) |



# CSV

## Objective
For the Bot to download a Google Sheets as a CSV file.

First, create this script:

Before: We need to download the “Demo” file into the “Save Email Attachment” folder.

We need to get the File ID first.

## Steps

- Set File ID.

- Set File Path as the folder path ending with “\Demo.csv”.

- Set Mime Type as CSV.

After: The OrangeBot downloaded the “Demo” file as a CSV file.

#### 

# XLSX

## Objective
For the Bot to download a Google Sheets as an XLSX file.

First, create this script:

Before: We need to download the “Demo” file into the “Save Email Attachment” folder.

We need to get the File ID first.

## Steps

- Set File ID.

- Set File Path as the folder path ending with “\Demo.xlsx”.

- Set Mime Type as XLSX.

After: The OrangeBot downloaded the “Demo” file as an XLSX file.

# XLSX

## Objective 
For the Bot to download a Google Sheets as an XLSX file.

First, create this script:

Before: We need to download the “Demo” file into the “Save Email Attachment” folder.

We need to get the File ID first.

## Steps

- Set File ID.

- Set File Path as the folder path ending with “\Demo.xlsx”.

- Set Mime Type as XLSX.

After: The OrangeBot downloaded the “Demo” file as an XLSX file.

# PDF

## Objective
For the Bot to download a Google Sheets as a PDF file.

First, create this script:

Before: We need to download the “Demo” file into the “Save Email Attachment” folder.

We need to get the File ID first.

## Steps

- Set File ID.

- Set File Path as the folder path ending with “\Demo.pdf”.

- Set Mime Type as PDF.

After: The OrangeBot downloaded the “Demo” file as a PDF file.

# Google Sheet Command

# Initialize Service

## Objective
For the Bot to gain access to Google Sheets.

## Input Table 
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Credentials Path | The path of the JSON file that will be used as credentials to access the Google Sheets. Make sure to complete Google Drive: Initialize Service before doing this. |

You need to complete Google Drive: Initialize Service before doing this.

## Steps
First, create this script:

Go to https://console.cloud.google.com/.

Click “Select a project”.

Click “New Project”.

Create a New Project.

Click “APIs & Services”, and then click “Credentials”.

Click on the project you just created.

Click “Manage service accounts”.

Click “Create Service Account”.

Create a Service Account.

Click “Done”.

Click on the Email.

Click “Add Key” and Click “Create new key”.

Create a JSON file.

It should download a JSON file.

Search for “Google Drive API”.

Click “Enable”.

Search for “Google Sheets API”.

Click “Enable”.

Step:

- Set Google Credentials Path as the file path for the JSON file.

# Rename Spreadsheet

## Objective
For the Bot to rename a Google Sheet Spreadsheet.

## Input Table 

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| New Spreadsheet Name | The new name of the Google Sheet File after it is renamed. |

*You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service before doing this.


## Steps

First, create this script:

Before: We need to rename the “Demo” Spreadsheet.

First, we need the Google Sheet ID.

Step:

- Set Spreadsheet ID

- Set New Spreadsheet Name

After: The Bot renames the Spreadsheet to “Demo 2”.

# Check Sheet Exist

## Objective
For the Bot to check if a Google Sheet Spreadsheet exists.


## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| Sheet Name | The Sheet Name of the Google Sheet file the user wants to check. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “true”, it will save the result in the Gvariable, so as a result, “true” will be saved as the value of “@Text@”. |

*You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service before doing this.

Service before doing this.

## Steps

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to check if the “Sheet1” Sheet exists.

First, we need the Google Sheet ID.

You need to create a new Global Variable.

Step:

- Set Spreadsheet ID

- Set Sheet Name

- Set Gvariable to Save

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot finds that the “Sheet1” sheet exists.

# Rename Sheet

## Objective
For the Bot to rename the “Sheet1” sheet to “Demo”.

## Table Input
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| Sheet Name | The Sheet Name of the Google Sheet file the user wants to check. |
| New Sheet Name | The new Sheet Name after it has been renamed. |

You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service before doing this.

First, create this script:

Before: We need to check if the “Sheet1” Sheet exists.

First, we need the Google Sheet ID.

## Steps

- Set Spreadsheet ID

- Set Sheet Name”as “Sheet1”

- Set New Sheet Name as “Demo”

*All fields not seen here do not need to be filled.

After: The Bot renames “Sheet1” to “Demo”.

# Search Cell

## Objective
For the Bot to search for a text value in the Google Sheet.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| Sheet Name | The Sheet Name of the Google Sheet file the user wants to check. |
| Row Start | The start row of the Range to be searched (e.g. “1”,”2”,etc.) |
| Column Start | The start column of the Range to be searched (e.g. “A” or “1”, “B” or ”2”,etc.) |
| Row End | The end row of the Range to be searched (e.g. “100”,”200”,etc.) |
| Column End | The end column of the Range to be searched (e.g. “Y” or “25”, “Z” or ”26”,etc.) |
| Action Mode | Recommended default is Range.<br>This allows the user to search the Google Sheet by<br>Row: Search through rows.<br>Column: Search through columns.<br>Range: Search through rows and columns. |
| Condition | This allows the user to search cells with a specified value (e.g. 123) by:<br>Exactly: Is exactly the same as all the data in the cell. For example, if the searched value is “123” and the value in the cell is also exactly “123”, it will be marked as true.<br>Contains: Is a partial match with the data in the cell. For example, if the searched value is “1” and the value in the cell is “123”, it will be marked as true. |
| Value to Set | The text data that will be searched in the Google Sheet file (e.g. 123) |

# Exactly

## Objective
For the Bot to search for the cells that have the exact value of “Line” in the Google Sheet.


You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service before doing this.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the cells with the exact value of “Line”.

First, we need the Google Sheet ID.

## Steps

- Set Spreadsheet ID.

- Set Sheet Name” as “Sheet1”.

- Set Row Start as 1.

- Set Column Start as E.

- Set Row End as 10,000.

- Set Column End as F.

- Set Action Mode to “Range”.

- Set Condition to “Exactly”.

- Set Value to Set as “Line”.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot can find the cells with “Line” and identifies 7 cells in total.

# Contains

## Objective
For the Bot to search for the cells with “+” in the Google Sheet.

*You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service before doing this.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to find the cells with “+”.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

## Steps

- Set Spreadsheet ID.

- Set Sheet Name” as “Sheet1”.

- Set Row Start as 1.

- Set Column Start as B.

- Set Row End as 10,000.

- Set Column End as E.

- Set Action Mode to “Range”.

- Set Condition to “Contains”.

- Set Value to Set as “+”.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot can find the cells with “+” and identifies 6 cells in total.

# Get Cell Value

## Objective
For the Bot to save the data regarding the name in the cell “A2”.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| Sheet Name | The Sheet Name of the Google Sheet file the user wants to check. |
| Row Number | The row of the data to be extracted |
| Column Number | The column of the data to be extracted |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. For example, if the user uses a Gvariable called “@Text@” and the Result is “1”, it will save the result in the Gvariable, so as a result, “1” will be saved as the value of “@Text@”. |

You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service before doing this.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to save the name.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

You need to create a new Global Variable.

## Steps

- Set Spreadsheet ID.

- Set Sheet Name” as “Sheet1”.

- Set Row Number as 2.

- Set Column Number as A.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot saves the name in @Text@.



# Set Cell Value

## Objective
For the Bot to set “123” inside the Google Sheet.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| Sheet Name | The Sheet Name of the Google Sheet file the user wants to check. |
| Row Number | The row to insert the data. |
| Column Number | The column to insert the data. |
| Value to Set | The data that will be inserted into the cell. |

*You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service before doing this.

First, create this script:

Before: We need to set “123” in A1.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

## Steps

- Set Spreadsheet ID.

- Set Sheet Name” as “Demo”.

- Set Row Number as 1.

- Set Column Number as A.

- Set Value to Set as “123”

*All fields not seen here do not need to be filled.

After: The Bot sets “123” in A1.



# Get Row Value

## Objective
For the Bot to extract data from an entire row

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| Sheet Name | The Sheet Name of the Google Sheet file the user wants to check. |
| Row Number | The row of the data to be extracted |
| Column Start | The start column of the Range to be extracted (e.g. “A” or “1”, “B” or ”2”,etc.) |
| Column End | The end column of the Range to be extracted (e.g. “100”,”200”,etc.) |

You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service before doing this.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to set “123” in A1.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

## Steps

- Set Spreadsheet ID.

- Set Sheet Name” as “Sheet1”.

- Set Row Number as 2.

- Set Column Number (Start) as A.

- Set Column Number (End) as C.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot saves contact info of Shameem in Row 2.

# Set Row Value

## Objective
For the Bot to set data from an entire row into a new row..

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| Sheet Name | The Sheet Name of the Google Sheet file the user wants to check. |
| Row Number | The row to insert the data. |
| Column Number | The start column to insert the data. |
| Value to Set | The data that will be inserted into the cell. |

*You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service AND Google Sheet: Get Row Value before doing this.

First, create this script:

Before: This has been saved by Get Row Value.

Before: We need to place the data in another spreadsheet.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

## Steps

- Set Spreadsheet ID.

- Set Sheet Name” as “Demo”.

- Set Row Number as 1.

- Set Column Number (Start) as A.

- Set Value to Set as @GoogleSheetsRowResult@.

*All fields not seen here do not need to be filled.

After: The Bot places the data in Row 1.


# Get Column Value

## Objective
For the Bot to save the data regarding the contact info of Shameem in row 2.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| Sheet Name | The Sheet Name of the Google Sheet file the user wants to check. |
| Column Number | The column of the data to be extracted |
| Row Start | The start row of the Range to be extracted. |
| Row End | The end row of the Range to be extracted. |

*You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service before doing this.

First, create this script:

Before: We need to save the data regarding all the names.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

## Steps

- Set Spreadsheet ID.

- Set Sheet Name” as “Sheet1”.

- Set Column Number as A.

- Set Row Number (Start) as 2.

- Set Row Number (End) as 4.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot saves info of names in Column 1.

# Set Column Value

## Objective
For the Bot to place data in Column A.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| Sheet Name | The Sheet Name of the Google Sheet file the user wants to check. |
| Row Number | The row to insert the data. |
| Column Number | The start column to insert the data. |
| Value to Set | The data that will be inserted into the cell. |

*You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service AND Google Sheet: Get Column Value before doing this.

First, create this script:

Before: This is the data from Get Column Value.

Before: We need to place the data in a new spreadsheet.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

## Steps

- Set Spreadsheet ID.

- Set Sheet Name” as “Demo”.

- Set Row Number as 1.

- Set Column Number (Start) as A.

- Set Value to Set as @GoogleSheetsColumnResult@.

*All fields not seen here do not need to be filled.

After: The Bot places the data in Column A.

# Get Range Value

## Objective
For the Bot to save the data from a table.

## Table Input

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| Sheet Name | The Sheet Name of the Google Sheet file the user wants to check. |
| Row Start | The start row of the Range to be extracted (e.g. “1”,”2”,etc.) |
| Column Start | The start column of the Range to be extracted (e.g. “A” or “1”, “B” or ”2”,etc.) |
| Row End | The end row of the Range to be extracted (e.g. “100”,”200”,etc.) |
| Column End | The end column of the Range to be extracted (e.g. “Y” or “25”, “Z” or ”26”,etc.) |

You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service before doing this.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to save the data in the table.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

## Steps:

- Set Spreadsheet ID.

- Set Sheet Name” as “Sheet1”.

- Set Row Number (Start) as 2.

- Set Column Number (Start) as A.

- Set Row Number (End) as 7.

- Set Column Number (End) as D.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot saves the data in the entire table.

# Set Range Value

## Objective
For the Bot to save the data in the table in Google Sheets.

## Table Input

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Spreadsheet ID | The ID of the Google Sheet file. |
| Sheet Name | The Sheet Name of the Google Sheet file the user wants to check. |
| Row Number | The row to insert the data. |
| Column Number | The start column to insert the data. |
| Value to Set | The data that will be inserted into the cell. |

*You need to complete Google Drive: Initialize Service AND Google Sheet: Initialize Service AND Google Sheet: Get Range Value before doing this.

First, create this script:

Before: This is the data from Get Range Value.

Before: We need to place the data in a new spreadsheet.

First, we need the Google Sheet ID.

You also need to get the Sheet Name.

## Steps

- Set Spreadsheet ID.

- Set Sheet Name” as “Sheet1”.

- Set Row Number as 2.

- Set Column Number as A.

- Set Value to Set as @GoogleSheetRangeResult@

*All fields not seen here do not need to be filled.

After: The Bot saves data in the entire table.

# Image Command

# Find Image

## Objective
To confirm that an application is open by scanning for an image. *Make sure to always allow pop-ups from .

## Table Input

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Screen Shot Path | Default is @CroppedImgPath@. This is the path where the OrangeBot will save extra screenshots when the OrangeBot runs the task. The path will change according to the user PC/server, but it should resemble: “C:\Users\OrangeFIN\CroppedImages\” |
| Validate Image Path | The Screenshot taken using Crop Tool for the OrangeBot to compare with the current PC screen when running. |
| Crop Tool | A button to extract location data from a Screenshot. |
| X - Position | The starting X Position for the Screenshot. This is auto generated by using the Crop Tool function. |
| Y - Position | The starting Y Position for the Screenshot. This is auto generated by using the Crop Tool function. |
| Width | The Width (measurement of left to right) of the Screenshot. This is auto generated by using the Crop Tool function. |
| Height | The Height (measurement of left to right) of the Screenshot. This is auto generated by using the Crop Tool function. |
| Accepted Similarity (0.00-1.00) | The % similarity to the screenshot of the PC screen. The OrangeBot will check if the PC screen matches the screenshot with a chosen minimum % of similarity. The default is 0.9, which means it must be at least 90% similar. It is not recommended to use 1.0, as the PC screen is unlikely to be 100% similar to the screenshot taken. |
| Find Duration (second) | The total amount of seconds the OrangeBot will take to check if the PC screen matches the screenshot taken. If it is set as 5, it will take a maximum of 5 seconds to check. |
| Interval (millisecond) | The time taken to wait before going to the next task. For example, if the user sets it as 1000 milliseconds, it will wait 1 second before moving to the next task. |

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to confirm that the application is open on screen.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A “Get Image” Window appears.

Open Teamviewer.

Open the “Get Image” window and click “Get Image”.

Go back to OrangeWorkforce. The screenshot appears here. Click “Draw”.

Click, hold and draw a box around the Teamviewer Logo.

Click Crop Image. It should download a picture.

Click Close.

Go to Downloads, click the image, and copy the path.

## Steps

- Set Validate Image Path

- X & Y Position are automatically generated.

- Width & Height are automatically generated.

- Set Accepted Similarity as 0.90 (90%).

- Set Find Duration as 5 (5 seconds).

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the OrangeBot has found the Teamviewer logo, and so has confirmed that the Teamviewer application on screen.

# Print Screen

## Objective
To capture the image of the current screen.

## Table Input

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Path To Save | The path of the saved image. |

Before: We need to capture and save an image of the Teamviewer application.

We need to save the image in the New Folder.

## Steps:

- Set Path to Save as the file path of the New Folder and make sure to put the name of the picture with “.png” at the end.

*All fields not seen here do not need to be filled

After: Result shows that the OrangeBot has saved the image of the Teamviewer under the name “test”.


# Crop Screen

## Objective
To crop an image.

## Table Input

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Path To Save | The path of the saved image after cropping. |
| Crop Tool | A button to extract location data from a Screenshot. |
| Start Position X | The starting X Position for the Screenshot. This is auto generated by using the Crop Tool function. |
| Start Position Y | The starting Y Position for the Screenshot. This is auto generated by using the Crop Tool function. |
| Width | The Width (measurement of left to right) of the Screenshot. This is auto generated by using the Crop Tool function. |
| Height | The Height (measurement of left to right) of the Screenshot. This is auto generated by using the Crop Tool function. |

Before: We need to crop this image.

You need to paste the image in Paint.

Click Select.

Click, Draw a box around the Teamviewer logo. CLICK AND HOLD.

You should see the X and Y locations, together with the Width and Height.

Make sure to click and hold and do both at the same time.

## Steps

- Set Path to Save as the file path of the image.

- Set Start Position X.

- Set Start Position Y.

- Set Width.

- Set Height.

*All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot has cropped the image of Teamviewer.

# Rotate Image

## Objective
To rotate an image.

## Table Input

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Image Path | The path of the image file to rotate. |
| Rotation (Clockwise) | Allows the user to rotate the image by:<br>90°<br>180°<br>270° |

# 90°

## Objective
To rotate an image 90°.

Before: We need rotate this image 90°.

## Steps

- Set Path to Save as the file path of the image.

- Set Rotation (Clockwise) as 90.

*All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot has rotated the image 90°.


# 180°

## Objective
To rotate an image 180°.

Before: We need rotate this image 180°.

## Steps:

- Set Path to Save as the file path of the image.

- Set Rotation (Clockwise) as 180.

*All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot has rotated the image 180°.



# 270°

## Objective
To rotate an image 270°.

Before: We need rotate this image 180°.

## Steps

- Set Path to Save as the file path of the image.

- Set Rotation (Clockwise) as 270.

*All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot has rotated the image 270°.

# Job Control Command

# Rerun This Job

## Objective
To rerun the Job.

## Table Input

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |

## Steps

- Set Task Order & Description

*All fields not seen here do not need to be filled.

Click Publish Job.

Go to Job Studio Designer.

- Set Application Name

- Set Bot Name

- Set Job Name

- Set Schedule Type

- Set Start Time

- Set End Time

- Set Execute Time

Open the OrangeBot.

Enter the ID & Password and click Login.

Click View, and click Home Page.

Click Play for both the OrangeFIN Schedule & Bot Agent.

After: The Bot reruns the Job over and over again during the set start to end time.



# Run Next Job

## Objective
To run another Job.

Before: This is the Job (Success) we need to run.

Click Publish Job.

## Steps

- Set Application Name (refer to Application Profile)

- Set Job Name as the Job you want to run.

*All fields not seen here do not need to be filled.

Click Publish Job.

Go to Job Studio Designer.

Click Publish Job.

- Set Application Name

- Set Bot Name

- Set Job Name

- Set Schedule Type

- Set Start Time

- Set End Time

- Set Execute Time

Open the OrangeBot.

Enter the ID & Password and click Login.

Click View, and click Home Page.

Click Play for both the OrangeFIN Schedule & Bot Agent.

After: The Bot runs the “Success” Job after running the “Job Control Testing” Job.

# End This Job

## Objective: To end the Job.

## Steps

- Set Task Order & Description

*All fields not seen here do not need to be filled.

Click Publish Job.

Go to Job Studio Designer.

- Set Application Name

- Set Bot Name

- Set Job Name

- Set Schedule Type

- Set Start Time

- Set End Time

- Set Execute Time

Open the OrangeBot.

Enter the ID & Password and click Login.

Click View, and click Home Page.

Click Play for both the OrangeFIN Schedule & Bot Agent.

After: The Bot ends the Job.

# JSON Command

A JSON file collects data in key-value pairs and arrays. JSON files allow developers to collect various types of data such as human-readable code, with each key serves as names and values with relevant data.

# Append JSON

## Objective
To add new data at the end of a JSON file.

Before: We have this JSON file here.

Before: We have to add this data to the above JSON file.

## Steps:

- Set Source 1 as the File Path of the first JSON file.

- Set Source 2 as the File Path of the second JSON file.

- Set JSONPath of Source 1 as “age”.

- Set JSONPath of Source 2 as “age”.

- Set Output File Path as a text file path.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot has added the data form the second JSON file at the end.

# Get JSON Value

## Objective 
To retrieve data from a JSON file.

Before: We have this JSON file here.

You need to create a new Global Variable.

## Steps:

- Set Source as the File Path of the JSON file.

- Set Field Name as “age”.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot has retrieved the data from the JSON file.

# Get JSON List

## Objective
To retrieve a list from a JSON file.

Before: We need the get the list regarding “name”.

You need to create a new Global Variable.

## Steps

- Set Source as the File Path of the JSON file.

- Set Field Name as “name”.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot has retrieved the list from the JSON file.

# Get JSON Table

## Objective
To retrieve a table from a JSON file.

Before: We need the get the table regarding “name”.

You need to create a new Global Variable.

## Steps

- Set Source as the File Path of the JSON file.

- Set Field Name as “name”.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: Result shows that the Bot has retrieved the table from the JSON file.



# List

## Objective
To convert data from a list into a JSON format.

Before: We need to convert the data from this list intoa JSON format.

## Steps:

- Set Value Type as List.

- Set List Value.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot has converted the data into a JSON format.



# Table

## Objective
To convert data from a table into a JSON format.

Before: We need to convert the data from this table into a JSON format.

## Steps:

- Set Value Type as Table.

- Set Table Value.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

After: Result shows that the Bot has converted the data into a JSON format.



# Send Text

## Objective: To type “123”.

Step:

- Set Text to Send as “123”.

*All fields not seen here do not need to be filled.

After: The Bot types “123”.


# Send Special Key

## Objective 
To highlight the text “123” by clicking CTRL + A.

Before: The Bot needs to highlight “123”.

## Steps:

- Set Key 1 as CTRL.

- Set Key 2 as A.

*All fields not seen here do not need to be filled.

After: The Bot highlight the text “123”.

### Keyboard Shortcuts

- CTRL+A:Select All

- CTRL+C:Copy

- CTRL+X:Cut

- CTRL+V: Paste

- CTRL+Z: Undo

- CTRL+Y: Redo

- CTRL+B: Bold

- CTRL+U: Underline

- CTRL+I: Italic

- CTRL+S: Save

- F1: Help

- F2: Rename selected object

- F3: Search files

- F4:Opens file list drop-down in dialogs

- F5: Refresh current window

- F6: Shifts focus in Windows Explorer

- F10: Activates menu bar options

- ALT+TAB: Cycles between open applications

- ALT+F4: Quit program, close current window

- ALT+F6: Switch between current program windows

- ALT+ENTER: Opens properties dialog

- ALT+SPACE: System menu for current window

- BACKSPACE: Switch to parent folder

- CTRL+ESC: Opens Start menu

- CTRL+ALT+DEL: Opens task manager, reboots the computer

- CTRL+TAB: Move through property tabs

- ESC: Cancel last function

- SHIFT: Press/hold SHIFT

- SHIFT+F10: Opens context menu (same as right-click)

- SHIFT+DELETE:Full wipe delete (bypasses Recycle Bin)

- PAGE UP: moves document or dialog box up one page

- PAGE DOWN: moves document or dialog down one page

- WINDOWS+UP: Maximise window

- WINDOWS+DOWN: Minimise window

- WINDOWS+D: Display the desktop

- WINDOWS+L: Lock PC


# Add Item

## Objective
To add items to a list.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| List | The list that needs to be edited. |
| Mode | This allows the user to insert the new value in the list by:<br>Insert at: Allows the user to insert the new value at a chosen place (e.g. after 1st item, after 2nd item, etc.)<br>Append Last: Allows the user to insert new values at the end of the list. |
| Index | This must be filled if the Mode is Insert at. Set this to signify where the OrangeBot will insert the item in the list (e.g. after 1st item, after 2nd item, etc.). However, an Index starts at 0, not 1.<br>For example, 0 = 1st item, 1 = 2nd item, etc.<br>So, if the user sets it as “0”, then it will insert the item after the 1st item in the list. |
| Value | The item that will be added to the list. |
| Gvariable to Save | The OrangeBot will save the Result list in a Gvariable created by the user. |

# Append Last

## Objective
To add the value “3” at the end of a list.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need add the value “3” at the end of a list.

## Steps:

- Set List

- Set Mode as Append Last.

- Set Value as “3”.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has added the value “3” at the end of a list.

# Insert At

## Objective
To insert the value “3” in the second value of the list.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need insert the value “3” in the second value of the list.

## Steps:

- Set List

- Set Mode as Insert At.

- Set Index as 1 (0 is the 1st value, 1 is the 2nd value)

- Set Value as “3”.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has inserted the value “3” in the second value of the list.

# Remove Item

## Objective
To remove an item from the list.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| List | The list that needs to be edited. |
| Mode | This allows the user to remove the new value in the list by:<br>Remove at: Allows the user to remove a new value at a chosen place (e.g. 1st item, 2nd item, etc.)<br>Remove Range: Allows the user to remove multiple items from a list at a chosen place (e.g. 1st item to 3rd item, 6th to 7th item, etc.)<br>Remove After: Allows the user to remove a new value after a chosen place (e.g. after 1st item, after 2nd item, etc.)<br>Remove Before: Allows the user to remove a new value after a chosen place (e.g. before 2nd item, before 3rd item, etc.)<br>Remove Duplicate: Allows the user to remove duplicate items in a list.<br>Remove Specific: Allows the user to remove a specific value in a list. For example, if the user sets it as “123”, it removes “123” from a list. |
| Index | This must be filled if the Mode is Remove at, Remove Range, Remove After, and Remove Before. Set this to signify where the OrangeBot will remove the item in the list (e.g. after 1st item, after 2nd item, etc.). However, an Index starts at 0, not 1.<br>For example, 0 = 1st item, 1 = 2nd item, etc.<br>So, if the user sets it as “0”, then it will remove the item at the 1st item in the list. |
| Count | This must be filled if the Mode is Remove Range. If the Index is set as “2”, and the Count is set as “3”, the OrangeBot will remove the 3rd item to the 5th item, 3 items in total. |
| Value | This must be filled if the Mode is Remove Specific .This is the item that will be removed from the list. |
| Gvariable to Save | The OrangeBot will save the Result list in a Gvariable created by the user. |

# Remove At

## Objective
To remove the first value in the list.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to remove the first value in the list.

## Steps:

- Set List.

- Set Mode as Remove At.

- Set Index as “0”(0 =1st, 1 = 2nd).

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has removed the first value of the list.

# Remove Range

## Objective
To remove the third to the fifth value in the list at the same time.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to remove the third to the fifth value in the list at the same time.

## Steps

- Set List.

- Set Mode as Remove Range.

- Set Index as “2”(0 =1st, 1 = 2nd).

- Set Count as “3” (Remove 3 values).

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has removed the third to the fifth values in the list.

#### Remove After

## Objective: To remove everything after the second value in the list at the same time.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to remove everything after the second value in the list at the same time.

Step:

- Set List.

- Set Mode as Remove After.

- Set Index as “1”(0 =1st, 1 = 2nd).

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has removed everything after the second value in the list at the same time.

#### 

# Remove Before

## Objective
To remove everything before the fourth value in the list at the same time.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to remove everything before the fourth value in the list at the same time.

## Steps

- Set List.

- Set Mode as Remove Before.

- Set Index as “3”(0 =1st, 1 = 2nd).

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has removed everything before the fourth value in the list at the same time.



# Remove Duplicate

## Objective
To remove duplicates from the list.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to remove duplicates from the list.

## Steps 

- Set List.

- Set Mode as Remove Duplicate.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has removed duplicates from the list.



# Remove Specific

## Objective
To remove the specific value “7” from the list.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to remove specific value “7” from the list.

## Steps

- Set List.

- Set Mode as Remove Specific.

- Set Value as “7”.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has removed the value “7” from the list.

# Clone List

## Objective
To clone and save a list into another Global Variable.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| List | The list that needs to be cloned. |
| Gvariable to Save | The OrangeBot will save the Result list in a Gvariable created by the user. |

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to clone and save this list into another Global Variable.

## Steps

- Set List.

- Set Gvariable to Save (can be any Global Variable).

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has cloned the list into the @Empty@ Global Variable.



# Sort List

## Objective
To sort a list in ascending or descending order.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| List | The list that needs to be cloned. |
| Mode | This allows the user to sort the list by:<br>Ascending<br>Descending |
| Gvariable to Save | The OrangeBot will save the Result list in a Gvariable created by the user. |

# Ascending

## Objective 
To sort a list in ascending order.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to sort this list in ascending order.

## Steps

- Set List.

- Set Mode as Ascending.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has sorted this list in ascending order.



# Descending

## Objective
To sort a list in descending order.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to sort this list in descending order.

## Steps

- Set List.

- Set Mode as Ascending.

- Set Gvariable to Save.

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has sorted this list in descending order.



# Get Calculation Result

## Objective
To calculate the values in a list.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| List | The list that needs to be cloned. |
| Mode | This allows the user to make a calculation of the items in the list by:<br>Average<br>Count<br>Max<br>Min<br>Median<br>Sum |
| Gvariable to Save | The OrangeBot will save the calculation result in a Gvariable created by the user. |

# Average

## Objective

To calculate the average of the values in the list.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to calculate the average of the values in this list.

## Steps

- Set List.

- Set Mode as Average.

- Set Gvariable to Save (can be any Global Variable).

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has calculated the average of the values in the list.



# Count

## Objective

To calculate the number of the values in the list.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to calculate the number of values in this list.

## Steps

- Set List.

- Set Mode as Count.

- Set Gvariable to Save (can be any Global Variable).

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has calculated the number of values in this list.

 

# Max

## Objective 
To calculate the maximum value in the list.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to calculate the maximum value in the list.

## Steps

- Set List.

- Set Mode as Max.

- Set Gvariable to Save (can be any Global Variable).

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has calculated the maximum value in the list.



# Min

## Objective
To calculate the minimum value in the list.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to calculate the minimum value in the list.

## Steps

- Set List.

- Set Mode as Min.

- Set Gvariable to Save (can be any Global Variable).

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has calculated the minimum value in the list.



# Median

## Objective
To calculate the median value in the list.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to calculate the median value in the list.

## Steps 

- Set List.

- Set Mode as Median.

- Set Gvariable to Save (can be any Global Variable).

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has calculated the median value in the list.



# Sum

## Objective
To calculate the total sum of the values in the list.

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to calculate the total sum of the values in the list.

## Steps

- Set List.

- Set Mode as Sum.

- Set Gvariable to Save (can be any Global Variable).

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has calculated the total sum of the values in the list.



# Join Items

## Objective
To join all the values in a list in one line.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| List | The list that needs to be cloned. |
| Delimiter | This is the character that will be used to connect all the items in one line. The delimiter can be anything, including “,”, “-”, “and”, etc.<br>For example:<br>“,” - 1,2,3,4,5<br>“-” - 1-2-3-4-5<br>“ and ” - 1 and 2 and 3 and 4 and 5 |
| Gvariable to Save | The OrangeBot will save the calculation result in a Gvariable created by the user. |

First, create this script: Make sure to set the last task as Toggle Breakpoint.

Before: We need to join all the numbers in one line.

Step:

- Set List.

- Set Delimiter as “-” (up to you).

- Set Gvariable to Save (can be any Global Variable).

*All fields not seen here do not need to be filled.

*Use Toggle Breakpoint to see the result below.

After: Check Global Variable to see the results.

After: Result shows that the Bot has joined all the values in one line.



# Open Line

## Objective
To open Line app.

## Table Input

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Line Path | The path of the Line App downloaded in the PC |

## Steps

- Set Line Path.

After: Result shows that Line application has opened.

# Send Message

## Objective
To send a message using Line.

## Input Table

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Chat Name | The contact name of the person/group. |
| Message to Send | The text message that will be sent. |


First, create this script:
## Steps

- Set Chat Name (get the Contact Name from Line).

- Set Message to Send.

*All fields not seen here do not need to be filled.

After: Result shows the Bot has sent a message through Line.


# Attach Document

## Objective
To send a document through Line.

## Table Input

| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Chat Name | The contact name of the person/group. |
| Document to Attach | The file that will be sent to the contacted person/group. |

## Steps
First, create this script:

- Set Chat Name (get the Contact Name from Line)

- Set File Path in the Document to Attach

*All fields not seen here do not need to be filled.

After: Result shows the Bot has sent a document through Line.


# Close Line

## Objective
To close Line application.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |

## Steps

First, create this script:

- Set Task Order & Description

*All fields not seen here do not need to be filled.



# Add

## Objective
To add two numbers together.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Number 1 | The first number. |
| Number 2 | The second number to be added/ |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. |

## Steps
First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.


- Set Number 1 as 1

- Set Number 2 as 1

- Set Gvariable To Store Result

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot calculates 1 + 1 to get the number 2.


# Minus

## Objective
To deduct one number from another.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Number 1 | The first number. |
| Number 2 | The second number to be deducted |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. |

## Steps
First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.


- Set Number 1 as 4

- Set Number 2 as 3

- Set Gvariable To Store Result

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot calculates 4 - 3 to get the number 1.



# Multiply

## Objective
To multiply two numbers together.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Number 1 | The first number. |
| Number 2 | The second number to be multiplied |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. |

## Steps

First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

- Set Number 1 as 6

- Set Number 2 as 5

- Set Gvariable To Store Result

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot calculates 6x5 to get the number 30.


# Divide

## Objective: To divide one number with another number.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Number 1 | The first number. |
| Number 2 | The second number to be divided. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. |


##Steps
First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

- Set Number 1 as 28

- Set Number 2 as 7

- Set Gvariable To Store Result

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot calculates 28/7 to get the number 4.



#Module

##Objective
The modulus is another name for the remainder after division. For example for 61 mod 17, we calculate like this: 61/17 = 3 (Rounded up) 17 x 3 = 51 61 - 51 = 10 10 is the remainder so, 61 mod 17 = 10

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Number 1 | The first number. |
| Number 2 | The second number that represents the module. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. |


## Steps
First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.


- Set Number 1 as 61

- Set Number 2 as 17

- Set Gvariable To Store Result

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot calculates 61 mod 17 to get the number 10.



# Date Calculation

## Objective
 To calculate a date based on specific methods (previous month, next year, the day before, etc.).

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Source Date | The first date chosen by the user. It must be written according to the source format. |
| Source Format | The date format of the input date chosen by the user. The user may use the following formats:<br>yyyyMMdd - 20251108<br>dd-MM-yyyy - 08-11-2025<br>dd/MM/yyyy - 08/11/2025<br>dd - 08<br>MM - 11<br>MMM - Nov<br>MMMM - November<br>yyyy - 2025<br>yy - 25 |
| Action Mode | This allows the user to make a calculation of the date based on:<br>Adds Month: Increases the date based on a chosen number of months ahead.<br>Adds Year: Increases the date based on a chosen number of years ahead.<br>Minus Day: Decreases the date based on a chosen number of days before.<br>Minus Month: Decreases the date based on a chosen number of months before.<br>Minus Year: Decreases the date based on a chosen number of years before.<br>Get First Day of Month: Automatically retrieves the first day of the month.<br>Get Last Day of Month: Automatically retrieves the last day of the month. |
| Param | This must be filled for any Add or Minus mode. This will be filled with the number of days/months/years to be added or subtracted.<br>For example, if the Source date is “14/8/2025” set as “Minus Month” and the Param is set as “3”, it will decrease the date by 3 months and the result will be “14/5/2025”. |
| Output Format | The date format of the output date. The user may use the following formats:<br>yyyyMMdd - 20251108<br>dd-MM-yyyy - 08-11-2025<br>dd/MM/yyyy - 08/11/2025<br>dd - 08<br>MM - 11<br>MMM - Nov<br>MMMM - November<br>yyyy - 2025<br>yy - 25 |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. |

# Adds Day

## Objective
To get the date for the next day after the 21st of February 2023.

## Steps
First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.


- Set the Source Date (in format yyyyMMdd)

- Set Source Format as yyyyMMdd

- Set Action Mode as Adds Day

- Set Param as 1

- Set Output Format as yyyy-MM-dd

- Set Gvariable to Save

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot gets the date for the 22nd of February 2023 in the format yyyy-MM-dd.



# Adds Month

## Objective
To get the name of the Month for 2 months later after the 21st of February 2023.

## Steps

First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

- Set the Source Date (in format yyyyMMdd)

- Set Source Format as yyyyMMdd

- Set Action Mode as Adds Month

- Set Param as 1

- Set Output Format as MMM

- Set Gvariable to Save

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot gets the month of April in the format MMM.



# Adds Year

## Objective
To get the Year for 3 years later after the 21st of February 2023.

## Steps
First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.


- Set the Source Date (in format yyyyMMdd)

- Set Source Format as yyyyMMdd

- Set Action Mode as Adds Year

- Set Param as 3

- Set Output Format as yyyy

- Set Gvariable to Save

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot gets the year 2026 in the format yyyy.



# Minus Day

##Objective
To get the date before the 21st of February 2023.

##Steps

First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.


- Set the Source Date (in format yyyyMMdd)

- Set Source Format as yyyyMMdd

- Set Action Mode as Minus Day

- Set Param as 1

- Set Output Format as yyyy-MM-dd

- Set Gvariable to Save

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot gets the date for the 20th of February 2023 in the format yyyy-MM-dd.



#Minus Month

## Objective
To get the name of the Month for 2 months before the 21st of February 2023.

## Steps
First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.



- Set the Source Date (in format yyyyMMdd)

- Set Source Format as yyyyMMdd

- Set Action Mode as Minus Month

- Set Param as 2

- Set Output Format as MMM

- Set Gvariable to Save

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot gets the month of December in the format MMM.



# Minus Year

##Objective
To get the Year for 3 years before the 21st of February 2023.

## Steps

First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

- Set the Source Date (in format yyyyMMdd)

- Set Source Format as yyyyMMdd

- Set Action Mode as Minus Year

- Set Param as 3

- Set Output Format as yyyy

- Set Gvariable to Save

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot gets the year 2020 in the format yyyy.



# Get First Day of Month

## Objective
To get the first day of the month of February.

## Steps

First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.


- Set the Source Date (in format yyyyMMdd)

- Set Source Format as yyyyMMdd

- Set Action Mode as Get First Day of Month

- Set Output Format as yyyy-MM-dd

- Set Gvariable to Save

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot gets the date for the 1st of February 2023 in the format yyyy-MM-dd.



# Get Last Day of Month


## Objective
To get the first day of the month of February.

## Steps

First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.


- Set the Source Date (in format yyyyMMdd)

- Set Source Format as yyyyMMdd

- Set Action Mode as Get Last Day of Month

- Set Output Format as yyyy-MM-dd

- Set Gvariable to Save

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot gets the date for the 28th of February 2023 in the format yyyy-MM-dd.


# Round Up

## Objective
To round up a number.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Number to Round Up | The number to be rounded up |
| Round Up Decimal | The number of decimals for the final result. Leave 0 for Whole Numbers. |
| Gvariable to Save | The OrangeBot will save the Result in a Gvariable created by the user. |

# Decimal

## Objective
To round up a number up to 2 decimals.

## Steps

First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.


- Set the Number to Round Up

- Set Round Up Decimal as 2

- Set Gvariable to Save

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot rounds up the number to 776.66.



# Whole Numbers

## Objective
To round up a number up in 100s.


## Steps

First, create this script: Make sure to set the last task as Toggle Breakpoint.

You need to create a new Global Variable.

- Set the Number to Round Up

- Set Round Up Decimal as 2

- Set Gvariable to Save

*All fields not seen here do not need to be filled.

After: Check Global Variable to see the results.

After: The Bot rounds up the number to 800.



# Mouse Select Range

## Objective
To highlight a table in Excel using the mouse.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Crop Tool | A button to extract location data from a Screenshot. |
| Start Position-X | The starting X Position for the Screenshot. This is auto generated by using the Crop Tool function. |
| Start Position-Y | The starting Y Position for the Screenshot. This is auto generated by using the Crop Tool function. |
| Width | The Width (measurement of left to right) of the Screenshot. This is auto generated by using the Crop Tool function. |
| Height | The Height (measurement of left to right) of the Screenshot. This is auto generated by using the Crop Tool function. |

## Steps
Make sure to always allow pop-ups from https://orangeworkforce.orangefinasia.com/.
Before: We need to the Bot to highlight this table using the mouse.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A “Get Image” Window appears.

Open the Excel file in full screen.

Open the “Get Image” window and click “Get Image”.

Go back to OrangeWorkforce. The screenshot appears here. Click “Draw”.

The screenshot should be in the OrangeWorkforce. Click, hold and draw a box from the first cell to the last cell of the table.

Click Crop Image.

Click Close.

Step:

- X & Y Position are automatically filled.

- Width & Height are automatically filled.

*All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot uses the mouse to highlight the entire table.


# Mouse Click

## Objective
To do a mouse click.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Crop Tool | A button to extract location data from a Screenshot. |
| Position-X | The starting X Position for the Screenshot. This is auto generated by using the Crop Tool function. |
| Position-Y | The starting Y Position for the Screenshot. This is auto generated by using the Crop Tool function. |
| Mouse Event | This allows the user to do a:<br>Left Click<br>Right Click<br>Double Left Click<br>Double Right Click |

# Left Click

## Objective
To click E5 in an Excel file.

## Steps
*Make sure to always allow pop-ups from https://orangeworkforce.orangefinasia.com/.

Before: We need to the Bot to click E5.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A “Get Image” Window appears.

Open the Excel file in full screen.

Open the “Get Image” window and click “Get Image”.

Go back to OrangeWorkforce. The screenshot appears here. Click “Draw”.

Go back to OrangeWorkforce. The screenshot should be in the OrangeWorkforce. Double Click E5.

Click Get Value.

Click Close.

- X & Y Position are automatically filled.

- Set Mouse Event as Left Click.

*All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot uses the mouse to click E5.



# Right Click

## Objective
To right click E5 in an Excel file.

## Steps
*Make sure to always allow pop-ups from https://orangeworkforce.orangefinasia.com/.

Before: We need to the Bot to click E5.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A “Get Image” Window appears.

Open the Excel file in full screen.

Open the “Get Image” window and click “Get Image”.

Go back to OrangeWorkforce. The screenshot appears here. Click “Draw”.

Go back to OrangeWorkforce. The screenshot should be in the OrangeWorkforce. Double Click E5.

Click Get Value.

Click Close.


- X & Y Position are automatically filled.

- Set Mouse Event as Right Click.

*All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot uses the mouse to right click E5.



# Double Left Click

## Objective
To open Teamviewer by double clicking.

## Steps
*Make sure to always allow pop-ups from https://orangeworkforce.orangefinasia.com/.

Before: We need to the Bot to double click the Teamviewer icon to open it.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A “Get Image” Window appears.

Open the “Get Image” window and click “Get Image”.

Go back to OrangeWorkforce. The screenshot appears here. Click “Draw”.

Go back to OrangeWorkforce. The screenshot should be in the OrangeWorkforce. Double Click the Teamviewer icon in the screenshot.

Click Get Value.

Click Close.


- X & Y Position are automatically filled.

- Set Mouse Event as Double Left Click.

*All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot uses the mouse to double click the Teamviewer icon and open the Teamviewer application.



# Double Right Click

## Objective
To double right click the Teamviewer icon.

## Steps
*Make sure to always allow pop-ups from https://orangeworkforce.orangefinasia.com/.

Before: We need to the Bot to double right click the Teamviewer icon.

Click the Crop Tool.

Click Screenshot.

Click Entire Screen, click the Image, and click Share.

A “Get Image” Window appears.

Open the “Get Image” window and click “Get Image”.

Go back to OrangeWorkforce. The screenshot appears here. Click “Draw”.

Go back to OrangeWorkforce. The screenshot should be in the OrangeWorkforce. Double Click the Teamviewer icon in the screenshot.

Click Get Value.

Click Close.


- X & Y Position are automatically filled.

- Set Mouse Event as Double Left Click.

*All fields not seen here do not need to be filled.

After: Result shows that the OrangeBot uses the mouse to double right click the Teamviewer icon.



# Mouse Scroll

## Objective
To scroll up/down.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Crop Tool | A button to extract location data from a Screenshot. |
| Position (x,y) | The starting X and Y Position for the Screenshot. This is auto generated by using the Crop Tool function. |
| Scroll Direction | This allows the user to scroll<br>Up<br>Down |
| Scroll Count | This sets how many times the OrangeBot will scroll up/down. If it is set as “2”, it will scroll 2 times. |
| Delay Time (ms) | Leave blank if not needed. This will set a delay between each scroll. For example, setting “10” will have the OrangeBot wait 10 milliseconds between each scroll. |

# Up

## Objective
To scroll up.


## Steps

Before: We need the Bot to scroll up.

- Set X and Y Position.

- Set Scroll Direction as Up.

- Set Scroll Count as 100.

*All fields not seen here do not need to be filled.

After: Results show that the Bot has scrolled up to see the whole table.



# Down

## Objective

To scroll down.

## Steps
Before: We need the Bot to scroll down.



- Set X and Y Position.

- Set Scroll Direction as Down.

- Set Scroll Count as 100.

*All fields not seen here do not need to be filled.

After: Results show that the Bot has scrolled down.



# Mouse Move

##Objective

To hover the mouse point over a specific point on your screen.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Move to Position (x,y) | The X and Y Position for the OrangeBot to hover above. This is auto generated by using the Crop Tool function. |
| Delay (ms) | Leave blank if not needed. This will set a delay before the mouse moves to another point. For example, setting “10” will have the OrangeBot wait 10 milliseconds before moving to the set position. |

##Steps

First, create this script:

* You need to complete Mouse Click to get the X & Y Location.

Before: We need the Bot to shover over "Free ebooks" to dropdown the list.


- Set Move to Position (x,y).

*All fields not seen here do not need to be filled.

After: Results show that the Bot has hovered over "Free Ebook" and the list drops down.



# Mouse Drag and Drop

## Objective: To drag with your mouse and drop to another point.

## Input Table
| Field | Description |
| --- | --- |
| Task Name | Name of the task belong to the group |
| Task Description | Description to describe the task |
| Start Position (x,y) | The starting X and Y Position. This is auto generated by using the Crop Tool function. |
| End Position (x,y) | The ending X and Y Position. This is auto generated by using the Crop Tool function. |
| Delay (ms) | Leave blank if not needed. This will set a delay before the mouse moves to another point. For example, setting “10” will have the OrangeBot wait 10 milliseconds before moving to the set position. |


## Steps

First, create this script: * You need to complete Mouse Click to get the X & Y Location.

Before: We need the Bot to drag "High Taras" to "Trash".


- Set Start Position.

- Set End Position.

*All fields not seen here do not need to be filled.

After: Results show that the Bot has dragged "High Taras" to "Trash".