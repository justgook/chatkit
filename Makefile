WIKI_REPOSITORY ?= https://github.com/justgook/wiki
WIKI_VERSION ?= v1.4.0
WIKI_ENGINE := .wiki-engine
WIKI_OUTPUT := .wiki-dist
WIKI_SOURCE := doc
PORT ?= 8080
VALIDATE_FLAGS ?=

.DEFAULT_GOAL := serve
.PHONY: serve build validate clean

# Keep paths relative to this project, not the downloaded engine directory.
serve build validate: $(WIKI_ENGINE)/Makefile
	@$(MAKE) -f "$(WIKI_ENGINE)/Makefile" $@ \
		WIKI_ENGINE="$(WIKI_ENGINE)" WIKI_SOURCE="$(WIKI_SOURCE)" \
		WIKI_OUTPUT="$(WIKI_OUTPUT)" PORT="$(PORT)" \
		VALIDATE_FLAGS="$(VALIDATE_FLAGS)"

$(WIKI_ENGINE)/Makefile: Makefile
	@set -eu; \
	tmp=$$(mktemp -d "$${TMPDIR:-/tmp}/chatkit-wiki.XXXXXX"); \
	trap 'rm -rf "$$tmp"' EXIT INT TERM; \
	echo "Downloading wiki engine $(WIKI_VERSION)..."; \
	curl -fLsS --retry 3 "$(WIKI_REPOSITORY)/archive/$(WIKI_VERSION).tar.gz" -o "$$tmp/wiki.tar.gz"; \
	mkdir -p "$$tmp/engine"; \
	tar -xzf "$$tmp/wiki.tar.gz" --strip-components=1 -C "$$tmp/engine"; \
	test -f "$$tmp/engine/Makefile"; \
	test -f "$$tmp/engine/scripts/serve.mjs"; \
	test -f "$$tmp/engine/scripts/build.sh"; \
		test -f "$$tmp/engine/scripts/validate.mjs"; \
	rm -rf "$(WIKI_ENGINE)"; \
	mv "$$tmp/engine" "$(WIKI_ENGINE)"; \
	touch "$(WIKI_ENGINE)/Makefile"

clean:
	@rm -rf "$(WIKI_ENGINE)" "$(WIKI_OUTPUT)"
