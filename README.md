# wcatCommands
In first i made wcat as a global command or alternative commands  for running files like wcat -w abc.txt and others
wcat is a global command as node "node filename" so you can run file by the "wcat filename"
This is the project in which i created some commands by me for example:-

1. wcat -w abc.txt def.txt ---- this command will override the text of the def.txt by the abc.txt 
2. wcat -a abc.txt def.txt ---- this command will append the text of abc.txt and def.txt into def.txt
3. wcat -ws abc.txt def.txt ---- this command will append the text of abc.txt and def.txt into def.txt first command will remove the line of the text abc.txt then append into the file
4. wcat -s abc.txt ------ will remove the empty lines
5. wcat -s-n abc.txt  ---- will remove the empty line and give the number to every lines example 1,2,3,4,5
6. wcat -b abc.txt --- will give numbers to every line even this command will give number to empty lines
7. wcat -b-n abc.txt --- will give numbers to every line even this command will give number to empty lines
8. wcat -b abc.txt --- will give numbers to the only lines with txt will not give numbers to the empty lines

