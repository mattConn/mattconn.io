# resume makefile to make pdf and html versions

RESUME = resume-2019

$(RESUME).pdf : $(RESUME).tex
	pdflatex $^

$(RESUME).html : $(RESUME).pdf
	pdf2htmlEX $^

all:
	@echo "Don't use makefile; use resume.html, export pdf."

clean:
	rm $(RESUME).pdf; rm $(RESUME).html;
