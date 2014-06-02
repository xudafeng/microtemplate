git_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d'-e's/* \(.*\)/\1/')
npm_bin= `npm bin`
TESTS = test/*.test.js
TIMEOUT = 1000
MOCHA_OPTS =

install:
	@npm install

jshint:
	@${npm_bin}/jshint .

test: install
	@NODE_ENV=test ${npm_bin}/mocha \
		--harmony \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-cov cov: install
	@NODE_ENV=test node --harmony \
		${npm_bin}/istanbul cover --preserve-comments \
		${npm_bin}/_mocha \
		-- -u exports \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)
	@${npm_bin}/cov coverage
