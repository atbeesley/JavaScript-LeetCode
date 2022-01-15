# Read from the file file.txt and output the tenth line to stdout.

declare -a array=()
i=0

while IFS= read -r line; do
    array[i]=$line
    let "i++"
done < "file.txt"

echo "${array[9]}"
