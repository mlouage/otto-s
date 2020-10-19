images=()
for file in images/*; do
    if [ -f "$file" ]; then
      images+=($(echo "$file" | awk -F '_' '{print $2}'))
    fi
done
# echo "the array contains ${#images[@]} elements"
sorted_unique_images=($(echo "${images[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' '))
# echo "the sorted unique array contains ${#sorted_unique_images[@]} elements"
for u in "${sorted_unique_images[@]}"
do
    echo "$u"
done
