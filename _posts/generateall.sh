declare -a MARKDOWNNAMES=($(ls . | grep '.*\.md' | sed -e 's/\.md$//'))

for mdfiletitle in ${MARKDOWNNAMES[@]}
do
	if [ ! -z "$mdfiletitle" ]
	then 
		pandoc $mdfiletitle.md --template ./template.html --mathml --lua-filter=date-format.lua -o ../blog/$mdfiletitle.html
		echo $mdfiletitle.html
	fi
done
