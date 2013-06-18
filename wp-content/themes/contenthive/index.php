<?php
/**
 * @package WordPress
 * @subpackage GGS WP
 */

get_header(); ?>

		<div id="container" class="wrapper">
			<div id="content" role="main">


				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'content', get_post_format() ); ?>

				<?php endwhile; ?>

			</div><!-- #content -->
		</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>